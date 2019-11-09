import * as React from "react";
import { useState } from "react";

const App: React.FC = () => {
  const [query, setQuery] = useState<string>();

  const fetchData = () => {
    console.log(query);
  };

  // const buildMovieDbURL = (query: string) => {};

  return (
    <div className="App">
      <form
        onSubmit={e => {
          e.preventDefault();
          fetchData();
        }}
      >
        <input
          type="text"
          placeholder="Busque um filme por nome, ano ou gênero."
          onChange={event => setQuery(event.target.value)}
        />
      </form>
    </div>
  );
};

export default App;
