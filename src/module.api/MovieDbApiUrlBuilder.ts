import { isMovieDBGenre, GENRE_LIST } from "./movieGenres";

/**
 * Take a query string, verifies if the string is a genre name
 * and based on this verification returns
 * a searchByGenre URL pattern string or
 * a searchByName URL pattern string.
 * @param query
 * @returns URL
 */
const buildSearchByNameOrSearchByGenreURL = (
  query: string,
  apiKey: string
): string => {
  const buildSearchByMovieGenreURL = (genreID: number) =>
    `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&sort_by=popularity.desc&page=1&with_genres=${genreID}`;

  const buildSearchByMovieNameURL = (movieName: string) =>
    `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${movieName}`;

  if (isMovieDBGenre(query, GENRE_LIST)) {
    const [genre] = GENRE_LIST.filter(gnr => gnr.name === query);

    if (genre) buildSearchByMovieGenreURL(genre.id);
  }

  return buildSearchByMovieNameURL(query);
};

export default buildSearchByNameOrSearchByGenreURL;
