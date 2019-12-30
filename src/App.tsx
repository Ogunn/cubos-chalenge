import * as React from 'react';

import { SearchMovieResponse } from './service/api/types';
import api from './service/api';

import MovieCard from './components/MovieCard';
import Header from './components/Header/Header';
import Form from './components/Form';

import './App.css';

const App: React.FC = () => {
  const [inputValue, setInputValue] = React.useState<string>('us');
  const [query, setQuery] = React.useState<string>('us');
  const [data, setData] = React.useState<SearchMovieResponse>();
  const baseImageUrl = 'https://image.tmdb.org/t/p/w300'; // It's important get this string dinamicaly because it may change over time.

  React.useEffect(() => {
    const fetchData = async () => {
      const data = await api.search.movie(query);

      if (data) {
        setData(data);
      }
    };

    fetchData();
  }, [query]);

  return (
    <div>
      <Header />

      <main>
        <Form
          handleSubmit={e => {
            e.preventDefault();
            setQuery(inputValue);
          }}
          handleInputChange={e => setInputValue(e.target.value)}
          placeHolder="Busque um filme por nome ou por gênero."
        />
        {data &&
          data.results.map(movie => (
            <MovieCard
              movie={movie}
              posterUrl={baseImageUrl + movie.poster_path}
              key={movie.id}
            />
          ))}
      </main>
    </div>
  );
};

export default App;
