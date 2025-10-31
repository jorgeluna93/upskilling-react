import { useParams } from "react-router-dom";
import useMovie from "../../hooks/useMovie";
import PrintMovie from "./PrintMovie";
import { type JSX} from "react";

function PrintMovieWrapper(): JSX.Element {
    const { id } = useParams<{id:string}>();

    const { movies, loading, error } = useMovie();

    if(loading) return <p>Cargando la pelicula :D</p>

    if(error) return <p> Algo salio mal: {error}</p>

    const movie = movies.find((m) => m.movieId === Number(id));

    return movie ? <PrintMovie movie={movie}/> : <p>Ni pepe,no se encontro la pelicula!</p>
}

export default PrintMovieWrapper;