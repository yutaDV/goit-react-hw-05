import axios from 'axios';

const API_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MjYyMTFhMTg4YTkzZjM3ZjI4NzhkNDUzZWFkYzRmMyIsIm5iZiI6MTcyNDc5MzA0NC4xMDU2MzcsInN1YiI6IjY2Y2UzMWJkNzM1ZDRjODFkNzlkYjMzMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XPdMujVkZLXyEknxJ_p9PCvdLa3nrICdYQ-m3pbCSCo';
const BASE_URL = 'https://api.themoviedb.org/3/trending/movie/';
const TIME_WINDOW = 'day'; // 'day' or 'week'

export const fetchTrendingMovies = async () => {
  const options = {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
    },
  };

  try {
    const response = await axios.get(`${BASE_URL}${TIME_WINDOW}`, options);
    console.log('Trending Movies Data:', response.data.results); 
    return response.data.results;
  } catch (error) {
    console.error('Error fetching trending movies:', error.message);
    throw error;
  }
};
