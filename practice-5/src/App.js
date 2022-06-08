import React, { useState, useEffect } from 'react';
import MoviesList from './components/MoviesList';
import './App.css';

const url = 'https://swapi.dev/api/films'

function App() {
  const [movies, setMovies] = useState([])
  const [isLodading, setIsLoading] = useState(false)
  async function fetchMoviesHandler() {
    setIsLoading(true)
    const response = await fetch(url)
    const data = await response.json()
    const transformedData = data.results.map((movie) => {
      return { id: movie.episode_id, title: movie.title, releaseDate: movie.release_date, openingText: movie.opening_crawl }
    })
    setMovies(transformedData)
    setIsLoading(false)
  }
  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movies} loading={isLodading} />
      </section>
    </React.Fragment>
  );
}

export default App;