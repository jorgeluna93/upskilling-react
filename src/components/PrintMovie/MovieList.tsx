import { useCallback, useEffect, useState,type JSX} from "react";
import type { MovieListProps } from "./type";
import type {Movie} from "../../types/movie";
import PrintMovie from "./PrintMovie";
import useMovie from "../../hooks/useMovie";
import useUser from "../../hooks/useUser";

function MovieList({movies}: MovieListProps): JSX.Element {
    const {loading,movies:filterMovies,showRecent, toggleShowRecent} = useMovie(movies);
    const {username} = useUser();


    if(loading){
        return <p>Cargando las peliculas</p>
    }
    else{
        return (
        <>
            <p>Hola, {username}. Esta son las peliculas a tu disposición</p>
            <button onClick={()=> toggleShowRecent()}> 
                {showRecent ? "Mostrar todas las peliculas" :  "Mostrar mas recientes" }
            </button>
            <br/>
            {filterMovies.length > 0 ? filterMovies.map((singleMovie:Movie) => <PrintMovie key={singleMovie.id} movie={singleMovie}/>) : <p> Vacio </p>}
        </>);
    }
}

export default MovieList;