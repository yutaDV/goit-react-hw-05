import  { useState, useEffect } from 'react';
import { useParams, Link, Outlet, useNavigate } from 'react-router-dom';
import { fetchMovieDetails } from '../../services/fetchMovieDetails';
import styles from './MovieDetailsPage.module.css';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const navigate = useNavigate();

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

  return (
    <div className={styles.container}>
      <button onClick={() => navigate(-1)} className={styles.goBackButton}>Go back</button>
      {movie && (
        <>
          <h2>{movie.title}</h2>
          <p>{movie.overview}</p>
          {/* Відображення зображення та іншої інформації */}
          <Link to="cast" className={styles.link}>Cast</Link>
          <Link to="reviews" className={styles.link}>Reviews</Link>
          <Outlet />
        </>
      )}
    </div>
  );
};

export default MovieDetailsPage;
