import * as React from 'react';
import axios from 'axios';

import buildSearchByNameOrSearchByGenreURL from './module.api/MovieDbApiUrlBuilder';
import { MDBResponse } from './module.api/interfaces/MovieDBInterfaces';

const App: React.FC = () => {
  const [inputValue, setInputValue] = React.useState<string>('us');
  const [data, setData] = React.useState<MDBResponse>();

  React.useEffect(() => {
    const fetchData = async () => {
      const apiKey = process.env.REACT_APP_API_KEY;
      let url: string;
      if (apiKey) {
        url = buildSearchByNameOrSearchByGenreURL(inputValue, apiKey);
        const result = await axios(url);

        setData(result.data);
      }
    }

    fetchData();
  }, [inputValue]);

  return (
    <div className="App">
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          type="text"
          placeholder="Busque um filme por nome, ano ou gênero."
          onChange={(event) => setInputValue(event.target.value)}
        />
      </form>
      <h2>{data && data.results[0].original_title}</h2>
      <p>{data && data.results[0].overview}</p>
    </div>
  );
};

export default App;
