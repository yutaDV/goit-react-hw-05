import  { useEffect, useState } from 'react';
import { fetchTrendingMovies } from '../../services/fetchMoviesByQuery ';

const TrendingMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrendingMovies()
      .then(data => {
        setMovies(data.results);
      })
      .catch(err => {
        console.error('Error fetching movies:', err);
      });
  }, []);

  return (
    <div>
      <h1>Trending Movies</h1>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default TrendingMovies;
