import { useCallback, useEffect, useState } from "react";
import type { Movie } from "../types/movie";
import type { UseMoviesResult } from "./type";
import { api } from "../lib/axios";

function useMovie(): UseMoviesResult {
    const [showRecent, setRecent] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true);
    const [movieData, setMovieData] = useState<Movie[]>([]);
    const [error,setError] = useState<string | null>(null);


    //Get data
    useEffect(() => {
        const controller = new AbortController();

        async function fetchMovies(){
            try{
                setLoading(true);
                setError(null);

                const response = await api.get(import.meta.env.VITE_APILINK,{signal: controller.signal});
               
                const data = response.data as Array<Movie>;

                const normalized:Movie[] = data.map((movie:Movie) => ({
                    ...movie,
                    releaseDate: new Date(movie.releaseDate)
                }));
                setMovieData(normalized);
            }
            catch(err:any){
                if(err?.name === "CanceledError" || err?.code === "ERR_CANCELED") return;
                const message = err?.response?.data?.message ?? err?.message ?? "Unknown Error";
                setError(message);

            }
            finally{
                setLoading(false);
            }

        }

        fetchMovies();
        return ()=>controller.abort();
    }, [] );


    const filterMovies = useCallback(() => {
        return showRecent
            ? movieData.filter((singleMovie: Movie) => singleMovie.releaseDate.getFullYear() >= 2020)
            : movieData;
    }, [showRecent, movieData]);

    return {
        loading,
        movies: filterMovies(),
        showRecent,
        toggleShowRecent: () => setRecent(!showRecent),
        error
    }

}

export default useMovie