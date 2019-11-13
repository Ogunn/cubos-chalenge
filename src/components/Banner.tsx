import * as React from "react";

import "./Banner.css";

interface IBannerProps {
  ImageUrl: string;
}

const Banner: React.FC<IBannerProps> = ({ ImageUrl }) => {
  return (
    <div className="banner">
      <img src={ImageUrl} alt="" />
    </div>
  );
};

export default Banner;
