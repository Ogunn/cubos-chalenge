import * as React from 'react';
import { Span } from './styles';

interface IProps {
  rate: string | number;
}

const Rate: React.FC<IProps> = ({ rate }) => {
  return <Span>{rate}</Span>;
};

export default Rate;
