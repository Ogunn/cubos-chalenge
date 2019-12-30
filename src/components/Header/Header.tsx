import * as React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  background-color: #116193;
`;

const H1 = styled.h1`
  margin: 0;
  color: white;
  text-align: center;
  font-family: "Abel", sans-serif;
  font-weight: 400;
`;

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <H1>Movies</H1>
    </StyledHeader>
  );
};

export default Header;
