import React, { useEffect, useState } from 'react';

import api from './service/api';
import { Movie } from './service/api/search/types';

import { Header, MovieList } from './components';
import { Container, TextField } from '@material-ui/core';
import { useStyles } from './app.styles';

const App: React.FC = () => {
  const [query, setQuery] = useState<string>('black panther');
  const [movieList, setMovieList] = useState<Movie[] | null>(null);
  const baseImageUrl = 'https://image.tmdb.org/t/p/w300'; // It's important get this string dinamicaly because it may change over time.
  const [time, setTime] = useState(0);
  const classes = useStyles();

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
    }, 2000);

    if (timeout) setTime(timeout);
  };

  return (
    <>
      <Header text="Movies" />
      <Container maxWidth="sm">
        <main>
          <TextField
            variant="outlined"
            size="small"
            margin="normal"
            fullWidth
            className={classes.root}
            onChange={handleInputChange}
          />
          <MovieList movieList={movieList} baseUrl={baseImageUrl} />
        </main>
      </Container>
    </>
  );
};

export default App;
