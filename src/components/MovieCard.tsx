import * as React from "react";

import { Result as Movie } from "../module.api/interfaces/MovieDBInterfaces";
import { getMovieGenreById } from "../module.api/movieGenres";
import Banner from "./Banner";
import Badge from "./Badge";

interface IMovieCardProps {
  movie: Movie;
  posterUrl: string;
}

const MovieCard: React.FC<IMovieCardProps> = ({ movie, posterUrl }) => {
  return (
    <div className="movie flex" key={movie.id}>
      <Banner ImageUrl={posterUrl} />

      <div className="movie-info grid">
        <h2 className="font-abel">{movie.original_title}</h2>

        <div className="sinopse">
          <span className="rate">{movie.vote_average * 10}</span>

          <span className="release-date">{movie.release_date}</span>

          <p className="margin-0 font-lato">{movie.overview}</p>

          <div className="categories">
            {movie.genre_ids.map(genreId => {
              const genre = getMovieGenreById(genreId);
              return <Badge text={genre.name} key={genre.id} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
