import { MDBMovieGenre } from "./interfaces/MovieDBInterfaces";

/**
 * Check if a word is equals a movie genre name.
 * The genre is an 'Movie DB API' type.
 *
 * @param word
 * @param genreList
 */
export const isMovieDBGenre = (word: string, genreList: MDBMovieGenre[]) => {
  const genre = genreList.filter(
    gnr => gnr.name.toLowerCase() === word.toLowerCase()
  );

  return genre.length > 0;
};

export const getMovieGenreById = (id: number) => {
  const [genre] = GENRE_LIST.filter(gnr => gnr.id === id);
  return genre;
};

export const GENRE_LIST: MDBMovieGenre[] = [
  {
    id: 28,
    name: "Action"
  },
  {
    id: 12,
    name: "Adventure"
  },
  {
    id: 16,
    name: "Animation"
  },
  {
    id: 35,
    name: "Comedy"
  },
  {
    id: 80,
    name: "Crime"
  },
  {
    id: 99,
    name: "Documentary"
  },
  {
    id: 18,
    name: "Drama"
  },
  {
    id: 10751,
    name: "Family"
  },
  {
    id: 14,
    name: "Fantasy"
  },
  {
    id: 36,
    name: "History"
  },
  {
    id: 27,
    name: "Horror"
  },
  {
    id: 10402,
    name: "Music"
  },
  {
    id: 9648,
    name: "Mystery"
  },
  {
    id: 10749,
    name: "Romance"
  },
  {
    id: 878,
    name: "Science Fiction"
  },
  {
    id: 10770,
    name: "TV Movie"
  },
  {
    id: 53,
    name: "Thriller"
  },
  {
    id: 10752,
    name: "War"
  },
  {
    id: 37,
    name: "Western"
  }
];
