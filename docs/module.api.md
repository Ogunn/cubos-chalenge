# The Movie DB API guide

## Root URL: https://api.themoviedb.org/3/

[Aqui](src/module.api/examples/examples.md) alguns exemplos

## Endpoints:

1. search a movie by name: **esse é o recurso que a aplicação utiliza para procurar um filme por nome.**

- doc: https://developers.themoviedb.org/3/search/search-movies
- doc: https://developers.themoviedb.org/3/getting-started/search-and-query-for-details

  - example: https://api.themoviedb.org/3/search/movie?api_key={api_key}&query=Us

    O exemplo acima utiliza Us como string de busca.

2. search a movie by genre: **esse é o recurso que a aplicação utiliza para prucurar um filme por gênero**

- doc: https://developers.themoviedb.org/3/discover/movie-discover
- ex: "https://api.themoviedb.org/3/discover/movie?api_key=<<api_key>>&sort_by=popularity.desc&page=1&with_genres=99"

  O exemplo acima utiliza o gênero 'documentário', que possui id=99.

3. search a movie by id: https://api.themoviedb.org/3/movie/76341?api_key=<<api_key>>

# Images URLs

The Movie Data Base disponibiliza imegans de diversos tamanhos. Para termos acesso às imagens precisamos construir a URL da imagem desejada. [Aqui](https://developers.themoviedb.org/3/getting-started/images) encontramos as instruções para isso.

Em resumo, a estrutura da URL da imagem é a seguinte:

base_url + file_size + file_path

base_url e file_size encontramos no endpoint de [configuração](https://api.themoviedb.org/3/configuration?api_key=<<api_key>>) da API.

file_path encontramos no endpoint do filme que queremos a imagem. Exemplo utilizando Mad Max: Fury Road: "https://api.themoviedb.org/3/movie/76341?api_key=<<api_key>>"
Esse endpoint nos retorna um arquivo json com um campo nomeado 'postar_path' que utilizaremos para recuperar a imagem.

Assim montamos nossa url do poster de Mad Max: 'https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg'

base_url = https://image.tmdb.org/t/p

file_size = /w500

file_path(poster_path) = /kqjL17yufvn9OVLyXYpvtyrFfak.jpg