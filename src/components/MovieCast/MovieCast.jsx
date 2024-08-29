
// src/components/MovieCast/MovieCast.jsx
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCredits } from '../../services/fetchMovieCredits';
import css from './MovieCast.module.css';

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const baseUrl = 'https://image.tmdb.org/t/p/w500';

  useEffect(() => {
    const getMovieCredits = async () => {
      try {
        const data = await fetchMovieCredits(movieId);
        setCast(data.cast);
      } catch (error) {
        console.error('Error fetching movie credits:', error);
      }
    };
    getMovieCredits();
  }, [movieId]);

  return (
    <div className={css.castContainer}>
      <h3>Cast</h3>
      <ul className={css.castList}>
        {cast.map(actor => (
          <li key={actor.id} className={css.castItem}>
            {actor.profile_path && (
              <img
                src={`${baseUrl}${actor.profile_path}`}
                alt={actor.name}
                className={css.castImage}
              />
            )}
            <p className={css.castName}>{actor.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieCast
