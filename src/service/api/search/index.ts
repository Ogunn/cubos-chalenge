import { MovieResponse } from './types';
import axios from '../axios';

const apiKey = process.env.REACT_APP_API_KEY;

export const movie = async (query: string) => {
  try {
    const response = await axios.get<MovieResponse>('/search/movie', {
      params: {
        api_key: apiKey,
        query
      }
    });

    const data = response.data;
    return data;
  } catch (error) {
    console.error(error);

    return null;
  }
};
