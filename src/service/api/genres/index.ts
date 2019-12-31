import { Response } from './types';
// import { get } from '../getData';
import { get } from '../axios';

export const getMovieList = (language?: string) =>
  get<Response>('/genre/movie/list', {
    language
  });
