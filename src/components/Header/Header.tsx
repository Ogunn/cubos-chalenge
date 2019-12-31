import * as React from 'react';
import { H1, StyledHeader } from './styles';

interface IProps {
  text: string;
}

const Header: React.FC<IProps> = ({ text }) => (
  <StyledHeader>
    <H1>{text}</H1>
  </StyledHeader>
);

export default Header;
