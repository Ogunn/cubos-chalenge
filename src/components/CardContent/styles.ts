import styled from 'styled-components';

export const Div = styled.div<{ height: number }>`
  width: 70%;
  height: ${props => props.height}px;
  display: grid;
  grid-template-rows: 1fr 8fr;
`;

export const Sinopse = styled.div`
  position: relative;

  .release-date {
    font-family: 'Abel', sans-serif;
    font-size: 0.6rem;
    margin-left: 3px;
    position: absolute;
    top: 0;

    @media only screen and (min-width: 480px) {
      font-size: 0.8rem;
    }

    @media only screen and (min-width: 768px) {
      font-size: 0.9rem;
    }
  }

  p {
    font-size: 0.7rem;
    position: absolute;
    top: 1.3rem;
    overflow: hidden;
    height: 55px;
    margin-left: 15px;
    margin-right: 5px;

    @media only screen and (min-width: 480px) {
      height: 85px;
      font-size: 1rem;
    }

    @media only screen and (min-width: 768px) {
      height: 148px;
      font-size: 1.2rem;
    }
  }
`;
