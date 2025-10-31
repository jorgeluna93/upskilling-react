import { useCallback, useEffect, useState } from "react";
import type { Movie } from "../types/movie";
import type { UseMoviesResult } from "./type";

function useMovie(MovieListProps: Movie[]): UseMoviesResult {
    const [showRecent, setRecent] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true);
    const [movieData, setMovieData] = useState<Movie[]>([]);

    useEffect(() => {
        setTimeout(() => {
            setMovieData(MovieListProps);
            setLoading(false);
        }, 2500);
    }, [MovieListProps]);

    const filterMovies = useCallback(() => {
        return showRecent
            ? movieData.filter((singleMovie: Movie) => singleMovie.releaseDate.getFullYear() >= 1984)
            : movieData;
    }, [showRecent, movieData]);

    return {
        loading,
        movies: filterMovies(),
        showRecent,
        toggleShowRecent: () => setRecent(!showRecent)
    }

}

export default useMovie