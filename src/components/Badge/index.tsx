import * as React from 'react';
import { Span } from './styles';

interface IBadgeProps {
  text: string;
}

const Badge: React.FC<IBadgeProps> = ({ text }) => {
  return <Span className="badge">{text}</Span>;
};

export default Badge;
