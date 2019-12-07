import { isMovieDBGenre, genreList, getMovieGenreByName } from "./movieGenres";

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
  /**
   *
   * @param {number} genreId - the genre id that is acepted by The Movie Databasa API.
   */
  const buildSearchByMovieGenreURL = (genreID: number) =>
    `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&sort_by=popularity.desc&page=1&with_genres=${genreID}`;

  /**
   *
   * @param {string} MovieName - the movie name.
   */
  const buildSearchByMovieNameURL = (movieName: string) =>
    `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${movieName}`;

  if (isMovieDBGenre(query, genreList)) {
    const genre = getMovieGenreByName(query);

    if (genre) return buildSearchByMovieGenreURL(genre.id);
  }

  return buildSearchByMovieNameURL(query);
};

export default buildSearchByNameOrSearchByGenreURL;
