import { Button, Card } from "react-bootstrap";
import type { movieProps } from "./type";
import { type JSX } from 'react'
import { Link } from "react-router-dom";

function PrintMovie({movie}:movieProps) :JSX.Element{
  return(
    <>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={movie.pictureUrl} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Subtitle>Release Date: {movie.releaseDate.toLocaleDateString('en-US',{
          year:'numeric',
          month:'long',
          day:'numeric'})}</Card.Subtitle>
        <Card.Text>
          {movie.description}
        </Card.Text>
        <Link to={`/movies/${movie.movieId}`}>
          <Button variant="primary" >Select</Button>
        </Link>
      </Card.Body>
      <Card.Footer>
          <Card.Text>ID #{movie.movieId}</Card.Text>
      </Card.Footer>
    </Card>
    </>
  );

}

export default PrintMovie