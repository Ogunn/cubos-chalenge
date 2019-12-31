import React from 'react';

import { Result as Movie } from '../../service/api/types';

import ShipGroup from '../ShipGroup';
import RateBadge from '../RateBadge';
import CardTitle from '../CardTitle';

import { Div, Sinopse } from './styles';

interface ICardContentProps {
  movie: Movie;
  height: number; // Set movie-info height: maybe this prop could be optional.
}

const CardContent: React.FC<ICardContentProps> = ({ movie, height }) => {
  return (
    <Div height={height}>
      <CardTitle text={movie.original_title} />

      <Sinopse className="sinopse">
        <RateBadge rate={movie.vote_average * 10} />

        <span className="release-date">{movie.release_date}</span>

        <p className="margin-0 font-lato">{movie.overview}</p>

        <ShipGroup genreIdList={movie.genre_ids} />
      </Sinopse>
    </Div>
  );
};

export default CardContent;
