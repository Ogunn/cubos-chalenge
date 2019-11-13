import * as React from "react";

interface IBadgeProps {
  text: string;
}

const Badge: React.FC<IBadgeProps> = ({ text }) => {
  return <span>{text}</span>;
};

export default Badge;
