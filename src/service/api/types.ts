export interface MDBMovieGenre {
  id: number;
  name: string;
}

export interface MDBResponse {
  page: number;
  total_results: number;
  total_pages: number;
  results: Result[];
}

export interface Result {
  popularity: number;
  id: number;
  video: boolean;
  vote_count: number;
  vote_average: number;
  title: string;
  release_date: Date;
  original_language: string;
  original_title: string;
  genre_ids: number[];
  backdrop_path: string;
  adult: boolean;
  overview: string;
  poster_path: string;
}

export interface SearchMovieResponse {
  page: number;
  total_results: number;
  total_pages: number;
  results: SearchMovieResult[];
}

export interface SearchMovieResult {
  popularity: number;
  vote_count: number;
  video: boolean;
  poster_path: string;
  id: number;
  adult: boolean;
  backdrop_path: string;
  original_language: string;
  original_title: string;
  genre_ids: number[];
  title: string;
  vote_average: number;
  overview: string;
  release_date: Date;
}
