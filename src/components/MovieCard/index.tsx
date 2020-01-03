import * as React from 'react';
import { Result as Movie } from '../../service/api/types';
import Banner from '../Banner';
import CardContent from '../CardContent';
import { Div } from './styles';

interface IMovieCardProps {
  movie: Movie;
  posterUrl: string;
}

const MovieCard: React.FC<IMovieCardProps> = ({ movie, posterUrl }) => {
  const [bannerHeight, setBannerHeight] = React.useState();

  return (
    <Div className="flex" key={movie.id}>
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
