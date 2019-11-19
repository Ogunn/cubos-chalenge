import * as React from "react";
import styled from "styled-components";

interface ICardTitleProps {
  text: string;
}

const H2 = styled.h2`
  margin: 0;
  padding: 6px 0 0 60px;
  background-color: #116193;

  /* font */
  color: white;
  font-size: 0.8em;
  font-weight: 400;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media only screen and (min-width: 480px) {
    font-size: 1.5rem;
  }
`;

const CardTitle: React.FC<ICardTitleProps> = ({ text }) => {
  return <H2 className="font-abel">{text}</H2>;
};

export default CardTitle;
