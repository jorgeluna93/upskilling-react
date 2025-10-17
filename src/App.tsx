import './App.css'
import PrintMovie from './components/PrintMovie/PrintMovie'
import { movieList } from './mocks/movie.mocks'
import type { Movie } from './types/movie';

function App() {
  const movieCatalog = 
    movieList
    .filter((singleMovie:Movie) => singleMovie.releaseDate.getFullYear() >= 1984)
    .map((singleMovie:Movie) => <PrintMovie key={singleMovie.id} movie={singleMovie}/>);

  return (
    <>
      <h1 className="main-title">Catalogo de peliculas de Acccenture</h1>
      <hr/>
      {movieCatalog}    
    </>
  )
}

export default App
