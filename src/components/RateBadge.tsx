import * as React from "react";
import styled from "styled-components";

interface IRateBadgeProps {
  rate: string | number;
}

const Span = styled.span`
  background-color: #116193;
  display: inline-block;

  --size: 2rem;
  height: var(--size);
  width: var(--size);
  border-radius: 50%;
  border: 2px solid #116193;
  box-shadow: inset 0px 0px 0px 3px white;

  margin-left: 0.5rem;
  transform: translateY(-1rem);

  text-align: center;
  line-height: var(--size);
  font-size: 0.7rem;
  color: white;
`;

const RateBadge: React.FC<IRateBadgeProps> = ({ rate }) => {
  return <Span>{rate}</Span>;
};

export default RateBadge;
