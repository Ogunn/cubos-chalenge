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

# Instruções de instalação

1. Clone o repositório
```shell
  git clone https://github.com/Ogunn/cubos-chalenge.git
```

2. Adicione a API key do The Movie Data Base no arquivo .env-development e renomeie o arquivo para .env
  
    A API utilizada por esse app requer uma chave de segurança. Para manter essa chave protegida tome alguns cuidados:
      
      - Nunca faça o upload dos arquivos de build de um react-app que contenha informações sensíveis nas variáveis de ambiente. Veja a issue [Security: API key in the react build. #2](https://github.com/Ogunn/cubos-chalenge/issues/2)

3. Instale as dependencias
```shell
  yarn install
```

4. Inicie o servidor
```shell
  yarn start
```

