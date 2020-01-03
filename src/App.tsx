import React, { useEffect } from 'react';

import api from './service/api';
import { Movie } from './service/api/search/types';

import Header from './components/Header/Header';
import Form from './components/Form';
import MovieList from './components/MovieList';

const App: React.FC = () => {
  const [inputValue, setInputValue] = React.useState<string>('');
  const [query, setQuery] = React.useState<string>('black panther');
  const [movieList, setMovieList] = React.useState<Movie[] | null>(null);
  const baseImageUrl = 'https://image.tmdb.org/t/p/w300'; // It's important get this string dinamicaly because it may change over time.

  useEffect(() => {
    const fetchData = async () => {
      const movieListResponse = await api.search.movie(query);
      if (movieListResponse) {
        setMovieList(movieListResponse.results);
      }
    };
    fetchData();
  }, [query]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setQuery(inputValue);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInputValue(e.currentTarget.value);

  return (
    <div>
      <Header text="Movies" />
      <main>
        <Form
          handleSubmit={handleSubmit}
          handleInputChange={handleInputChange}
          placeHolder="Busque um filme por nome ou por gênero."
        />
        <MovieList movieList={movieList} baseUrl={baseImageUrl} />
      </main>
    </div>
  );
};

export default App;
