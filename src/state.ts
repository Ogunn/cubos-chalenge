// https://api.themoviedb.org/3/movie/76341?api_key=<<api_key>>

interface State {
  query: string;
  movieList: [Movie];
}

interface Movie {
  originalTitle: string;
  posterPath: string;
  releaseDate: string;
  overview: string; // sinopse
  voteAverage: number;

  status: string;
  spokenLanguages: string;
  runtime: number; // duração
  revenue: number; // receita
  budget: number; // orçamento
  profit: number; // lucro
  genres: [string];
  video: string; // se tiver
}
