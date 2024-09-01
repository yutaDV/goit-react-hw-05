import { useState, useEffect, useRef } from 'react';
import { useParams, Link, Outlet, useNavigate, useLocation } from 'react-router-dom';
import { fetchMovieDetails } from '../../services/fetchMovieDetails';
import css from './MovieDetailsPage.module.css';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const previousLocation = useRef(location); // Збереження попереднього стану розташування
  const baseUrl = 'https://image.tmdb.org/t/p/w500';

  useEffect(() => {
    const getMovieDetails = async () => {
      try {
        const data = await fetchMovieDetails(movieId);
        setMovie(data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };
    getMovieDetails();
  }, [movieId]);

  const handleGoBack = () => {
    if (previousLocation.current) {
      navigate(previousLocation.current.state?.from || '/');
    } else {
      navigate(-1);
    }
  };

  return (
    <div className={css.container}>
      <button onClick={handleGoBack} className={css.goBackButton}>
        Go back
      </button>
      {movie && (
        <>
          <h2>{movie.title}</h2>
          {movie.poster_path && (
            <img
              src={`${baseUrl}${movie.poster_path}`}
              alt={movie.title}
              className={css.poster}
            />
          )}
          <p className={css.overview}>{movie.overview}</p>
          <Link to="cast" className={css.link}>Cast</Link>
          <Link to="reviews" className={css.link}>Reviews</Link>
          <Outlet />
        </>
      )}
    </div>
  );
};

export default MovieDetailsPage;
