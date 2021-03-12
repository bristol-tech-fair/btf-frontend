import styled from 'styled-components';
import { Link } from 'react-router-dom';
import mediaQuery from '../../utils/mediaQuery';

export const Banner = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  opacity: 0.6;
`;

export const Content = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: var(--largest-space) var(--smallest-space) var(--medium-space);
  background: var(--white);
  border: ${({ color }) => `0.1rem solid var(--${color})`};
  box-sizing: border-box;
  border-radius: var(--smallest-space);
  position: absolute;
  left: 0;
  top: 1rem;
  width: 32.8rem;
  height: 44rem;
  transition: all 0.2s ease;
  overflow: hidden;
  cursor: pointer;
  &:hover,
  &:active {
    transform: translate(0rem, -0.7rem);
    box-shadow: var(--card-shadow);
  }
  &:focus {
    box-shadow: ${({ color }) => `0 0 0 0.3rem var(--${color})`};
  }
  &:hover ${Banner} {
    opacity: 1;
  }
  ${mediaQuery.desktop} {
    h2 {
      font-size: 3.2rem;
    }
  }
`;

export const ContentCategory = styled.p`
  color: var(--darkblue);
  position: absolute;
  top: 37.95%;
  text-transform: capitalize;
  line-height: 130%;
`;

export const ContentAges = styled.p`
  position: absolute;
  top: 45.23%;
  color: var(--darkblue);
  line-height: 140.6%;
  text-transform: capitalize;
`;

export const ContentTitle = styled.h2`
  position: absolute;
  top: 55.45%;
  text-align: center;
  line-height: 130%;
  margin: var(--smallest-space);
`;

export const ContentRating = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: absolute;
  top: 83.86%;
  width: var(--largest-space);
  margin: var(--small-space) 0;
  padding: 0;
`;
