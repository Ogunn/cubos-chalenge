# Algumas informações sobre The Movie DB API

## Recuperando Imagens

Para recuperar uma [imagem](https://developers.themoviedb.org/3/getting-started/images) utilizamos a seguinte estrutura:

base_url + file_size + file_path

base_url e file_size encontramos no endpoint de [configuração](https://api.themoviedb.org/3/configuration?api_key=<<api_key>>) da API.

file_path encontramos no endpoint do filme que queremos o poster. Exemplo utilizando Mad Max: Fury Road: "https://api.themoviedb.org/3/movie/76341?api_key=<<api_key>>"
Esse endpoint nos retorna um arquivo json com um campo nomeado 'postar_path' que utilizaremos para recuperar a imagem.

Assim montamos nossa url que recuperará a imagem do poster de Mad Max: 'https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg'

base_url = https://image.tmdb.org/t/p

file_size = /w500

file_path(poster_path) = /kqjL17yufvn9OVLyXYpvtyrFfak.jpg
