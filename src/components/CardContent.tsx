import * as React from "react";
import { Result as Movie } from "../module.api/interfaces/MovieDBInterfaces";
import Badge from "./Badge";
import BadgeGroup from "./BadgeGroup";

import "./CardContent.css";

interface ICardContentProps {
  movie: Movie;
  height: number; // set movie-info height
}

/*
  TODO: use styled component in this component.
  The height of this component must have the height passed as prop height. That means
  the height have to be set dynamicaly. That's why it needs to be a styled-component.
*/

const CardContent: React.FC<ICardContentProps> = ({ movie, height }) => {
  return (
    <div className="movie-info grid">
      <h2 className="font-abel">{movie.original_title}</h2>

      <div className="sinopse">
        <span className="rate">{movie.vote_average * 10}</span>

        <span className="release-date">{movie.release_date}</span>

        <p className="margin-0 font-lato">{movie.overview}</p>

        <BadgeGroup genreIdList={movie.genre_ids} />
      </div>
    </div>
  );
};

export default CardContent;
