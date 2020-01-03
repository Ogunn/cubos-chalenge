import * as React from 'react';
import { Div, Img } from './style';

interface IProps {
  imageUrl: string;
  imageOffsetHeight: (offsetHeight: number) => void;
}

const Banner: React.FC<IProps> = ({ imageUrl, imageOffsetHeight }) => {
  const onImgLoad = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
    imageOffsetHeight(event.currentTarget.offsetHeight);
  };

  return (
    <Div>
      <Img onLoad={onImgLoad} src={imageUrl} alt="" />
    </Div>
  );
};

export default Banner;
