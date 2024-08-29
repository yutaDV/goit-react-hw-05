
import axios from 'axios';

const API_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MjYyMTFhMTg4YTkzZjM3ZjI4NzhkNDUzZWFkYzRmMyIsIm5iZiI6MTcyNDc5MzA0NC4xMDU2MzcsInN1YiI6IjY2Y2UzMWJkNzM1ZDRjODFkNzlkYjMzMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XPdMujVkZLXyEknxJ_p9PCvdLa3nrICdYQ-m3pbCSCo';
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchMovieCredits = async (movieId) => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/${movieId}/credits`, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
      params: {
        language: 'en-US',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching movie credits:', error);
    throw error;
  }
};
