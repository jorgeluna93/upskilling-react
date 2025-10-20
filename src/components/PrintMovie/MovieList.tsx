import { useEffect, useState,type JSX} from "react";
import type { MovieListProps } from "./type";
import type {Movie} from "../../types/movie";
import PrintMovie from "./PrintMovie";

function MovieList({movies}: MovieListProps): JSX.Element {
    const [showRecent,setRecent] = useState<boolean>(false);
    const [loading,setLoading] = useState<boolean>(true);
    const [movieData,setMovieData] = useState<Movie[]>([]);

    useEffect(() => {
        setTimeout(() =>{
            setMovieData(movies);
            setLoading(false);
        },2500);
    },[movies]);

    const filterMovies = showRecent 
    ? movieData.filter((singleMovie:Movie) => singleMovie.releaseDate.getFullYear() >= 1984) 
    : movieData;
    
    if(loading){
        return <p>Cargando las peliculas</p>
    }
    else{
        return (
        <>
            <button onClick={()=> setRecent(!showRecent)}> 
                {showRecent ? "Mostrar todas las peliculas" :  "Mostrar mas recientes" }
            </button>
            <br/>
            {filterMovies.length > 0 ? filterMovies.map((singleMovie:Movie) => <PrintMovie key={singleMovie.id} movie={singleMovie}/>) : <p> Vacio </p>}
        </>);
    }
}

export default MovieList;