import * as React from 'react';
import Ship from './Ship';
import { getMovieGenreById } from '../service/api/genres/utils';
import styled from 'styled-components';

interface IBadgeGroupProps {
  genreIdList: number[];
}

const Div = styled.div`
  position: absolute;
  left: 15px;
  bottom: 8px;
  font-size: 0.7rem;
  color: #116193;
`;

const BadgeGroup: React.FC<IBadgeGroupProps> = ({ genreIdList }) => {
  return (
    <Div>
      {genreIdList.map(genreId => {
        const genre = getMovieGenreById(genreId);
        return <Ship text={genre.name} key={genre.id} />;
      })}
    </Div>
  );
};

export default BadgeGroup;
