import * as React from 'react';

import { Result as Movie } from '../module.api/interfaces/MovieDBInterfaces';
import { GENRE_LIST } from '../module.api/movieGenres';
import Banner from './Banner';

interface IGenreBadgeProps {
  genreId: number;
}

const MovieGenreBadge: React.FC<IGenreBadgeProps> = ({genreId}) => {
  const [ genre ] = GENRE_LIST.filter(gnr => gnr.id === genreId)
  return (
    <span key={genre.id}>{genre.name}</span>
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
            <MovieGenreBadge genreId={gnr} />
          ))}
        </div>
      </div>
    </div>
  </div>
  )
}

export default MovieCard;