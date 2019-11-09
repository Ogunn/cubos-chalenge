import { isMovieDBGenre, GENRE_LIST } from "./movieGenres";

test("isMovieDBGenre is case insensitive", () => {
  expect(isMovieDBGenre("Action", GENRE_LIST)).toBe(true);
  expect(isMovieDBGenre("action", GENRE_LIST)).toBe(true);
});
