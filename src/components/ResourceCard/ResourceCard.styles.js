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
  align-items: center;

  background: var(--white);
  border: ${({ color }) => `0.1rem solid var(--${color})`};
  border-radius: var(--smallest-space);

  overflow: hidden;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 32.8rem;
  height: 44rem;

  transition: all 0.2s ease;
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
  ${mediaQuery.tablet} {
    h2 {
      font-size: 2.8rem;
    }
  }
`;

export const ContentCategory = styled.p`
  color: var(--darkblue);
  position: absolute;
  top: 37.95%;
  text-transform: capitalize;
`;

export const ContentAges = styled.p`
  color: var(--darkblue);
  position: absolute;
  top: 45.23%;
`;

export const ContentTitle = styled.h2`
  position: absolute;
  top: 52.45%;
  text-align: center;
  line-height: 130%;
  margin: var(--smallest-space);
`;

export const ContentRating = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 88.86%;
  width: var(--largest-space);
`;
