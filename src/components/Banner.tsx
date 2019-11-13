import * as React from 'react';

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

export default Banner;