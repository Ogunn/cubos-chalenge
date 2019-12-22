import * as React from 'react';
import styled from 'styled-components';
import { Result as Movie } from '../service/api/types';
import Banner from './Banner';
import CardContent from './CardContent';

interface IMovieCardProps {
  movie: Movie;
  posterUrl: string;
}

const Div = styled.div`
  background-color: #ebebeb;
  margin-bottom: 15px;

  @media only screen and (min-width: 375px) {
  }
  @media only screen and (min-width: 425px) {
  }
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 1024px) {
  }
  @media only screen and (min-width: 1440px) {
  }
  @media only screen and (min-width: 2560px) {
  }
`;

const MovieCard: React.FC<IMovieCardProps> = ({ movie, posterUrl }) => {
  const [bannerHeight, setBannerHeight] = React.useState();

  return (
    <Div className="movie-card flex" key={movie.id}>
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
