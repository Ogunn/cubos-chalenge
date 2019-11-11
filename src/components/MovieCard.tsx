import * as React from 'react';

import { Result as Movie } from '../module.api/interfaces/MovieDBInterfaces';

interface IBannerProps {
  ImageUrl: string;
}

const Banner: React.FC<IBannerProps> = ({ImageUrl}) => {
  return (
      <div className="banner">
        <img src={ImageUrl} alt=""/>
      </div>
  )
}

interface IMovieCardProps {
  movie: Movie;
  posterUrl: string;
}

const MovieCard: React.FC<IMovieCardProps> = ({movie, posterUrl}) => {
  return (
    <div className="movie flex" key={movie.id}>
    <Banner ImageUrl={posterUrl} />

    <div className="movie-info grid">
      <h2 className="font-abel">{movie.original_title}</h2>
      
      <div className="sinopse">
        <span className="rate">{movie.vote_average * 10}</span>
    
        <span className="release-date">{movie.release_date}</span>
      
        <p className="margin-0 font-lato">{movie.overview}</p>

        {/* Need to extract this component in order to map the genre id (currently showing) to the genre name */}
        <div className="categories">
          {movie.genre_ids.map((gnr, i) => (
            <span key={i}>{gnr}</span>
          ))}
        </div>
      </div>
    </div>
  </div>
  )
}

export default MovieCard;