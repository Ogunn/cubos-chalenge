# Planejamento

- [ ] Construir os templates em HTML e CSS das duas views
  - [x] Busca/Lista de filmes (view 1)
  - [ ] Detalhes do filme (view 2)
- [ ] Aprender a usar a API do The Movie DB
  - [x] Fazer requisições e pegar dados de exemplos
  - [x] Listar os [endpoints](#endpoints) que interessam para satisfazer os requisitos da aplicação
- [ ] Criar os componentes React
  - [ ] definir a componentização segundo o guia ['Thinking in React'](https://pt-br.reactjs.org/docs/thinking-in-react.html)
- [x] Criar módulo de conexão com a API do The Movie DB
- [x] Definir o formato do State da aplicação
- [ ] Definir como esse State será alterado pelas Actions
- [ ] Criar as Actions
- [ ] Adicionar a Store do Redux
- [ ] Conectar os components que desparam Actions para a Store
- [x] Criar API_key do The Movie DB

## To Refact

- [ ] Extract the movie element to a separeted component called MovieCard

  `App.tsx`
  ``` tsx
    data && data.results.map((movie, index) => (
      <div className="movie flex" key={index}>
  ```
- [ ] Extract the categories element to a separeted component colled CategoryBabges

  `App.tsx`
  ``` tsx
    <div className="categories">
      {movie.genre_ids.map((gnr, i) => (
        <span key={i}>{gnr}</span>
      ))}
    </div>
  ```

- [ ] Create a custo hook to fetch data