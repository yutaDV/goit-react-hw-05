import axios from 'axios';

const API_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MjYyMTFhMTg4YTkzZjM3ZjI4NzhkNDUzZWFkYzRmMyIsIm5iZiI6MTcyNDc5MzA0NC4xMDU2MzcsInN1YiI6IjY2Y2UzMWJkNzM1ZDRjODFkNzlkYjMzMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XPdMujVkZLXyEknxJ_p9PCvdLa3nrICdYQ-m3pbCSCo';

// Функція для отримання фільму за ID
export const fetchMovieDetails = (movieId) => {
  const url = `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`;

  const options = {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    }
  };

  return axios.get(url, options)
    .then(response => {
      console.log('Movie Details:', response.data); // Виведення отриманих даних
      return response.data;
    })
    .catch(err => {
      console.error('Error fetching movie details:', err.message); // Виведення помилки, якщо запит не вдався
      if (err.response) {
        console.error('Error Response Data:', err.response.data);
      }
      throw err;
    });
};
