import * as React from 'react';
import { H2 } from './styles';

interface IProps {
  text: string;
}

const CardTitle: React.FC<IProps> = ({ text }) => (
  <H2 className="font-abel">{text}</H2>
);

export default CardTitle;
