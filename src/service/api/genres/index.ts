import { GetListResponse } from './types';
// import { get } from '../getData';
import { get } from '../axios';

export const getMovieList = async (language?: string) =>
  await get<GetListResponse>('/genre/movie/list', {
    language
  });
