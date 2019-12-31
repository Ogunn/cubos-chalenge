import * as React from 'react';
import { Span } from './styles';

interface IShipProps {
  text: string;
}

const Ship: React.FC<IShipProps> = ({ text }) => {
  return <Span>{text}</Span>;
};

export default Ship;
