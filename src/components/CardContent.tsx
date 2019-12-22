import React from 'react';
import styled from 'styled-components';

import { Result as Movie } from '../service/api/types';

import BadgeGroup from './BadgeGroup';
import RateBadge from './RateBadge';
import CardTitle from './CardTitle';

interface ICardContentProps {
  movie: Movie;
  height: number; // Set movie-info height: maybe this prop could be optional.
}

const Div = styled.div<{ height: number }>`
  width: 70%;
  height: ${props => props.height}px;
  display: grid;
  grid-template-rows: 1fr 8fr;
`;

const Sinopse = styled.div`
  position: relative;

  .release-date {
    font-family: 'Abel', sans-serif;
    font-size: 0.6rem;
    margin-left: 3px;
    position: absolute;
    top: 0;

    @media only screen and (min-width: 480px) {
      font-size: 0.8rem;
    }

    @media only screen and (min-width: 768px) {
      font-size: 0.9rem;
    }
  }

  p {
    font-size: 0.7rem;
    position: absolute;
    top: 1.3rem;
    overflow: hidden;
    height: 55px;
    margin-left: 15px;
    margin-right: 5px;

    @media only screen and (min-width: 480px) {
      height: 85px;
      font-size: 1rem;
    }

    @media only screen and (min-width: 768px) {
      height: 148px;
      font-size: 1.2rem;
    }
  }
`;

const CardContent: React.FC<ICardContentProps> = ({ movie, height }) => {
  return (
    <Div height={height}>
      <CardTitle text={movie.original_title} />

      <Sinopse className="sinopse">
        <RateBadge rate={movie.vote_average * 10} />

        <span className="release-date">{movie.release_date}</span>

        <p className="margin-0 font-lato">{movie.overview}</p>
        <BadgeGroup genreIdList={movie.genre_ids} />
      </Sinopse>
    </Div>
  );
};

export default CardContent;
