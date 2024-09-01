import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMoviesByQuery } from '../../services/fetchMoviesByQuery ';
import MovieList from '../../components/MovieList/MovieList';
import css from './MoviesPage.module.css';

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  
  const query = searchParams.get('query') || '';

  useEffect(() => {
    if (query) {
      const fetchMovies = async () => {
        try {
          const data = await fetchMoviesByQuery(query);
          setMovies(data.results);
        } catch (error) {
          console.error('Error fetching movies:', error);
        }
      };
      fetchMovies();
    }
  }, [query]);

  const handleSearch = (e) => {
    e.preventDefault();
    const searchQuery = e.target.elements.query.value.trim();
    if (searchQuery) {
      setSearchParams({ query: searchQuery });
    }
  };

  return (
    <div className={css.container}>
      <form onSubmit={handleSearch} className={css.form}>
        <input
          type="text"
          name="query"
          defaultValue={query}
          className={css.input}
          placeholder="Search for movies..."
        />
        <button type="submit" className={css.button}>Search</button>
      </form>
      <MovieList movies={movies} />
    </div>
  );
};

export default MoviesPage;
