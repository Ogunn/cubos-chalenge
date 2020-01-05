import React, { useEffect, useState } from 'react';

import api from './service/api';
import { Movie } from './service/api/search/types';

import { Header, MovieList, Form } from './components';
import { Container } from '@material-ui/core';

const App: React.FC = () => {
  const [query, setQuery] = useState<string>('black panther');
  const [movieList, setMovieList] = useState<Movie[] | null>(null);
  const baseImageUrl = 'https://image.tmdb.org/t/p/w300'; // It's important get this string dinamicaly because it may change over time.
  const [time, setTime] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const movieListResponse = await api.search.movie(query);
      if (movieListResponse) {
        setMovieList(movieListResponse.results);
      }
    };
    fetchData();
  }, [query]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;

    if (time) clearTimeout(time);

    const timeout = setTimeout(() => {
      setQuery(value);
    }, 1000);

    if (timeout) setTime(timeout);
  };

  return (
    <>
      <Header text="Movies" />
      <Container maxWidth="sm">
        <main>
          <Form handleInputChange={handleInputChange} />
          <MovieList movieList={movieList} baseUrl={baseImageUrl} />
        </main>
      </Container>
    </>
  );
};

export default App;
