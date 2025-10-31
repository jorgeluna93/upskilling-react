import { type JSX} from "react";
import type {Movie} from "../../types/movie";
import PrintMovie from "./PrintMovie";
import useMovie from "../../hooks/useMovie";
import useUser from "../../hooks/useUser";
import { Button, Col, Container, Row } from "react-bootstrap";

function MovieList(): JSX.Element {
    const {loading,movies:filterMovies,showRecent, toggleShowRecent} = useMovie();
    const {username} = useUser();

    if(loading){
        return <p>Cargando las peliculas</p>
    }
    else{
        return (
            <>
                <Container className="my-4">
                    <div className="d-flex justify-content-between">
                        <Button variant="secondary" onClick={()=> toggleShowRecent()}> 
                        {showRecent ? "Mostrar todas las peliculas" :  "Mostrar mas recientes" }
                    </Button>
                    
                    <p>Hola, {username}. Esta son las peliculas a tu disposición</p>
                    </div>
                    <br/>
                    <Row xs={1} md={2} lg={3} className="g-4">
                        {filterMovies.length > 0 ?
                        filterMovies.map((singleMovie:Movie) => 
                        <Col key={singleMovie.movieId}><PrintMovie movie={singleMovie}/> </Col>) : <p> Vacio </p>}
                    </Row>
                </Container>
            </>
        );
    }
}

export default MovieList;