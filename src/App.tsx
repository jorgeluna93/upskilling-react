import './App.css'
import MovieList from './components/PrintMovie/MovieList';
import UserForm from './components/userForm/UserForm';
import { movieList } from './mocks/movie.mocks'

function App() {

  return (
    <>
      <h1 className="main-title">Catalogo de peliculas de Acccenture</h1>
      <hr/>
      <MovieList /> 
      {/* <UserForm/> */}
    </>
  )
}

export default App
