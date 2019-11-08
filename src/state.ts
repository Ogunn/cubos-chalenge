// https://api.themoviedb.org/3/movie/76341?api_key=d884e331c73a682a488cf33f32f919ed

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
