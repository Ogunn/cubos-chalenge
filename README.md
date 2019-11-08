# Desafio técnico web - processo seletivo da [Cubos](https://cubos.io)

## Objetivo

Implementar um web app responsivo que consuma a [API do The Movie DB](https://www.themoviedb.org/documentation/api) e permita buscar e ver detalhes de filmes de seu catálogo.

## Especificações

### Especificações obrigatórias

O web app _deve_:

- Ter as seguintes funcionalidades:
  - Permitir buscar filmes por nome ou gênero
  - Resultados de busca paginados, 5 por página
  - Exibir nos resultados da busca: nome, cartaz, data de lançamento, sinopse e pontuação do filme
  - Possa ver, ao clicar em um resultado da busca, detalhes do filme além dos mostrados na busca, como: status (lançado, previsto, etc), idioma, duração, orçamento, receita, lucro, categorias e trailer, quando disponíveis.
- Ser responsivo
- Ter boa performance
- Funcionar na última versão dos principais browsers (Chrome, Firefox, Safari e Edge)
- Reproduzir os layouts a seguir:

Vale citar que as fontes usadas nos layouts foram Abel e Lato.

O web app _não pode_:

- Fazer uso de frameworks CSS, como Bootstrap e Foundation

### Especificações adicionais

As especificações a seguir _não são obrigatórias_, mas contam pontos _extras_:

- Ter HTML semântico
- Fazer uso de técnicas avançadas em CSS, HTML e Javascript
- Demonstrar domínio de features modernas (ES6+) do Javascript
- Ser um PWA
- Fizer uso de uma ou mais das seguintes ferramentas:
  - React, Vue, Angular ou similares
  - Typescript, Flow ou similares
  - Redux, MobX ou similares

# Planejamento

- [ ] Construir os templates em HTML e CSS das duas views
  - [x] Busca/Lista de filmes (view 1)
  - [ ] Detalhes do filme (view 2)
- [ ] Aprender a usar a API do The Movie DB
  - [ ] Fazer requisições e pegar dados de exemplos
  - [ ] Listar os [endpoints](#endpoints) que interessam para satisfazer os requisitos da aplicação
- [ ] Criar os componentes React
  - [ ] definir a componentização segundo o guia ['Thinking in React'](https://pt-br.reactjs.org/docs/thinking-in-react.html)
- [ ] Criar módulo de conexão com a API do The Movie DB
- [ ] Definir o formato do State da aplicação
- [ ] Definir como esse State será alterado pelas Actions
- [ ] Criar as Actions
- [ ] Adicionar a Store do Redux
- [ ] Conectar os components que desparam Actions para a Store
- [x] Criar API_key do The Movie DB

# The Movie DB API guide

## Root URL: https://api.themoviedb.org/3/

[Aqui](src/module.api/examples/README.md) alguns exemplos

## Endpoints:

1. search a movie by name: **esse é o recurso que a aplicação utiliza para procurar um filme por nome.**

- doc: https://developers.themoviedb.org/3/search/search-movies
- doc: https://developers.themoviedb.org/3/getting-started/search-and-query-for-details

  - example: https://api.themoviedb.org/3/search/movie?api_key={api_key}&query=Us

    O exemplo acima utiliza Us como string de busca.

2. search a movie by genre: **esse é o recurso que a aplicação utiliza para prucurar um filme por gênero**

- doc: https://developers.themoviedb.org/3/genres/get-movie-list
- ex: "https://api.themoviedb.org/3/discover/movie?api_key=<<api_key>>&sort_by=popularity.desc&page=1&with_genres=99"

  O exemplo acima utiliza o gênero 'documentário', que possui id=99.

3. search a movie by id: https://api.themoviedb.org/3/movie/76341?api_key=<<api_key>>
