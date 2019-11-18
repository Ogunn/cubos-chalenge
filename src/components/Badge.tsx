import * as React from "react";
import "./Badge.css";

interface IBadgeProps {
  text: string;
}

const Badge: React.FC<IBadgeProps> = ({ text }) => {
  return <span className="badge">{text}</span>;
};

export default Badge;
