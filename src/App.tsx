import { useState, type JSX } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const name : string = "Sup broda";

type movieProps = {
  id: number,
  title: string,
  description: string,
  pictureURL: string,
  releaseDate: string
}

function PrintMovie({id,title,description,pictureURL,releaseDate}:movieProps): JSX.Element{
  return (
    <>
      <img src={pictureURL} alt={title} className="pic"/>
      <h3>ID:{id}</h3>
      <h3>Title: {title}</h3>
      <h3>Description: {description}</h3>
      <h3>releaseDate: {releaseDate} </h3>
    </>
  );
}

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <PrintMovie id={1} title="Citizen Kane" description="La historia examina la vida y el legado de Charles Foster Kane" releaseDate="Sept. 5 1941" pictureURL="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Citizen_Kane_poster%2C_1941_%28Style_B%2C_unrestored%29.jpg/800px-Citizen_Kane_poster%2C_1941_%28Style_B%2C_unrestored%29.jpg" />
      <PrintMovie id={2} title="Austin Powers" description="Un espia britanico es congelado y despertado en los 90s, una comedia de Mike Myers" releaseDate="Oct 7 1997" pictureURL="https://resizing.flixster.com/PUCIaRlk4nylqBCbryYw0mhBrsI=/206x305/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p19297_p_v10_aa.jpg" />
    </>
  )
}

export default App
