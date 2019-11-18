import * as React from "react";
import { Result as Movie } from "../module.api/interfaces/MovieDBInterfaces";
import Banner from "./Banner";
import CardContent from "./CardContent";

import "./MovieCard.css";

interface IMovieCardProps {
  movie: Movie;
  posterUrl: string;
}

const MovieCard: React.FC<IMovieCardProps> = ({ movie, posterUrl }) => {
  return (
    <div className="movie flex" key={movie.id}>
      <Banner ImageUrl={posterUrl} />
      <CardContent movie={movie} />
    </div>
  );
};

export default MovieCard;
