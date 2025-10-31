import { useRoutes } from 'react-router-dom'
import './App.css'
import {appRoutes} from './routes/routes'
import { Suspense } from 'react';
function App() {
  const routing = useRoutes(appRoutes);
  return (
    <>
      <h1 className="main-title">Catalogo de peliculas de Acccenture</h1>
      <hr/>
      <Suspense fallback={<p>Loading...</p>}> {routing}</Suspense>
  
    </>
  )
}

export default App
