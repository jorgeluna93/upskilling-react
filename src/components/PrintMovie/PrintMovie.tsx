import type { movieProps } from "./type";
import { type JSX } from 'react'

function PrintMovie({movie}:movieProps) :JSX.Element{
  return(
      <div className="print-movie">
        <img src={movie.pictureUrl} alt={movie.title} className="pic"/>
        <h3>ID: {movie.movieId}</h3>
        <h3>Title: {movie.title}</h3>
        <h3>Description: {movie.description}</h3>
        <h3>Release Date: {movie.releaseDate.toLocaleDateString('en-US',{
          year:'numeric',
          month:'long',
          day:'numeric'})}
        </h3>
      </div>
  );

}

export default PrintMovie