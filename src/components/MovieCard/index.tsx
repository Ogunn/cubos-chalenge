import React, { useState, FC } from 'react';
import { Result as Movie } from '../../service/api/types';
import { Banner, CardContent } from '../index';
import { Div } from './styles';

interface IMovieCardProps {
  movie: Movie;
  posterUrl: string;
}

const MovieCard: FC<IMovieCardProps> = ({ movie, posterUrl }) => {
  const [bannerHeight, setBannerHeight] = useState();

  return (
    <Div className="flex">
      <Banner
        imageUrl={posterUrl}
        imageOffsetHeight={offsetHeight => {
          setBannerHeight(offsetHeight);
        }}
      />
      <CardContent movie={movie} height={bannerHeight} />
    </Div>
  );
};

export default MovieCard;
