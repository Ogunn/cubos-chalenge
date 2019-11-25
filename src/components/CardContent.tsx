import * as React from "react";
import styled from "styled-components";
import { Result as Movie } from "../module.api/interfaces/MovieDBInterfaces";
import BadgeGroup from "./BadgeGroup";
import RateBadge from "./RateBadge";
import CardTitle from "./CardTitle";

import "./CardContent.css";

interface ICardContentProps {
  movie: Movie;
  height: number; // set movie-info height
}

const Div = styled.div<{ height: number }>`
  width: 70%;
  height: ${props => props.height}px;
  display: grid;
  grid-template-rows: 1fr 8fr;
`;

const CardContent: React.FC<ICardContentProps> = ({ movie, height }) => {
  return (
    <Div height={height}>
      <CardTitle text={movie.original_title} />

      <div className="sinopse">
        <RateBadge rate={movie.vote_average * 10} />

        <span className="release-date">{movie.release_date}</span>

        <p className="margin-0 font-lato">{movie.overview}</p>
        <BadgeGroup genreIdList={movie.genre_ids} />
      </div>
    </Div>
  );
};

export default CardContent;
