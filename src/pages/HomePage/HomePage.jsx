import  { useState, useEffect } from 'react';
import { fetchTrendingMovies } from '../../services/fetchTrendingMovies';
import MovieList from '../../components/MovieList/MovieList';
import css from './HomePage.module.css'

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const trendingMovies = await fetchTrendingMovies();
        setMovies(trendingMovies);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className={css.container}>
  <h1 className={css.title}>Trending Movies</h1>
  <MovieList movies={movies} />
</div>
  );
};

export default HomePage;
