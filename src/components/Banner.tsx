import * as React from "react";
import styled from "styled-components";

// import "./Banner.css";

interface IBannerProps {
  imageUrl: string;
  imageOffsetHeight: (offsetHeight: number) => void;
}

const Div = styled.div`
  width: 30%;
`;

const Img = styled.img`
  max-width: 100%;
  height: auto;
  display: block;
`;

const Banner: React.FC<IBannerProps> = ({ imageUrl, imageOffsetHeight }) => {
  const onImgLoad = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
    imageOffsetHeight(event.currentTarget.offsetHeight);
  };

  return (
    <Div className="banner">
      <Img onLoad={onImgLoad} src={imageUrl} alt="" />
    </Div>
  );
};

export default Banner;
