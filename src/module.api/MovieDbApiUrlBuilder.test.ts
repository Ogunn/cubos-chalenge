import buildSearchByNameOrSearchByGenreURL from "./MovieDbApiUrlBuilder";
import { loadAPIKey } from "./authentication";

test("Search movie_by_name_URL pattern is correct", () => {
  const apiKey = loadAPIKey();
  const query = "us";
  const url = buildSearchByNameOrSearchByGenreURL(query, apiKey);

  expect(url).toBe(
    `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`
  );
});
