# Upskilling de React

Este proyecto esta hecho pensado para poner en practica diversos conceptos de React.

# Environment Variables

Se agregaron Environment variables, como parte de las buenas practicas. Si quieres probar el codigo en tu dispositivo de forma local basta con agregar un archivo .env en la raiz, y alli indicar la url de la API (Backend)

```js
VITE_APILINK={URL_DEL_API}/api/Movie/catalog

```

# Componentes 
Se manejan desde pequeños componentes como <PrintMovie> hasta mas grandes como lo son los layouts.
```js
...
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
```

# Hooks
Los hooks ayudan a "enganchar"/"hookear" funcionalidades a los componentes, trabajamos en especial con el custom hook /hooks/useMovie.tsx que permite hacer fetch a la api y presentarnos la información

# Routes 
Las rutas (usando react-dom-router) nos permiten manejar como se puede desplazar el usuario final a traves del sitio. En este caso puedes apreciar como se configuro en /routes/routes.tsx

# Estilo y Maquetacion
Se hizo uso de React Bootstrap para que el contenido pudiera mostrarse mas presentable.


