import { useCallback, useEffect, useState,type JSX} from "react";
import type { MovieListProps } from "./type";
import type {Movie} from "../../types/movie";
import PrintMovie from "./PrintMovie";
import useMovie from "../../hooks/useMovie";

function MovieList({movies}: MovieListProps): JSX.Element {

    const {loading,movies:filterMovies,showRecent, toggleShowRecent} = useMovie(movies);


    // const filterMovies = showRecent 
    // ? movieData.filter((singleMovie:Movie) => singleMovie.releaseDate.getFullYear() >= 1984) 
    // : movieData;

    // const filterMovies = useCallback(()=>{
    //     return showRecent 
    //     ? movieData.filter((singleMovie:Movie) => singleMovie.releaseDate.getFullYear() >= 1984) 
    //     : movieData;
    // },[showRecent,movieData]);
    
    if(loading){
        return <p>Cargando las peliculas</p>
    }
    else{
        return (
        <>
            <button onClick={()=> toggleShowRecent}> 
                {showRecent ? "Mostrar todas las peliculas" :  "Mostrar mas recientes" }
            </button>
            <br/>
            {filterMovies.length > 0 ? (filterMovies.map((singleMovie:Movie) => (<PrintMovie key={singleMovie.id} movie={singleMovie}/>))) : <p> Vacio </p>}
        </>);
    }
}

export default MovieList;