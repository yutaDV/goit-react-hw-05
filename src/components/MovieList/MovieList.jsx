
import css from './MovieList.module.css';

const MovieList = ({ movies }) => {
  return (
    <ul className={css.list}>
      {movies.map(movie => (
        <li key={movie.id} className={css.item}>
          {/* Структура для відображення інформації про фільм */}
          <h3>{movie.title}</h3>
        </li>
      ))}
    </ul>
  );
};

export default MovieList; // Експорт за замовчуванням
