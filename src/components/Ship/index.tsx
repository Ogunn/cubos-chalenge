import * as React from 'react';
import { Span } from './styles';

interface IProps {
  text: string;
}

const Ship: React.FC<IProps> = ({ text }) => {
  return <Span>{text}</Span>;
};

export default Ship;
