import * as React from 'react';
import axios from 'axios';

import './app.css';

import buildSearchByNameOrSearchByGenreURL from './module.api/MovieDbApiUrlBuilder';
import { MDBResponse } from './module.api/interfaces/MovieDBInterfaces';

import MovieCard from './components/MovieCard';

const App: React.FC = () => {
  const [inputValue, setInputValue] = React.useState<string>('us');
  const [query, setQuery] = React.useState<string>('us');
  const [data, setData] = React.useState<MDBResponse>();
  const baseImageUrl = 'https://image.tmdb.org/t/p/w300'; // It's important get this string dinamicaly because it may change over time.

  React.useEffect(() => {
    const fetchData = async () => {
      const apiKey = process.env.REACT_APP_API_KEY;
      let url: string;
      if (apiKey) {
        url = buildSearchByNameOrSearchByGenreURL(query, apiKey);
        const result = await axios(url);

        setData(result.data);
      }
    }

    fetchData();
  }, [query]);

  return (
    <div className="App">
      <header>
      <h1>
        Movies
      </h1>
    </header>
    <main>
      <form onSubmit={
        (e) => { 
          e.preventDefault();
          setQuery(inputValue) 
        }}>
        <input
          type="text"
          placeholder="Busque um filme por nome, ano ou gênero."
          onChange={(event) => setInputValue(event.target.value)}
        />
      </form>
      {
        data && data.results.map((movie) => (
          <MovieCard 
            movie={movie} 
            posterUrl={baseImageUrl + movie.poster_path} 
            key={movie.id}
          />  
        ))
      }
    </main>
    </div>
  );
};

export default App;
