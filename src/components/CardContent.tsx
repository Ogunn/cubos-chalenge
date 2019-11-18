import * as React from "react";
import { Result as Movie } from "../module.api/interfaces/MovieDBInterfaces";
import { getMovieGenreById } from "../module.api/movieGenres";

import Badge from "./Badge";

interface ICardContentProps {
  movie: Movie;
}

const CardContent: React.FC<ICardContentProps> = ({ movie }) => {
  return (
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
  );
};

export default CardContent;
