import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Banner = styled.div`
  width: 100%;
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
  position: relative;
  max-width: 60rem;

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
`;

export const ContentCategory = styled.p`
  color: var(--darkblue);
  text-transform: capitalize;
  margin-top: -6rem;
`;

export const ContentAges = styled.p`
  color: var(--darkblue);
  margin-top: var(--small-space);
`;

export const ContentTitle = styled.h2`
  text-align: center;
  line-height: 130%;
  margin: var(--medium-space);
`;

export const ContentRating = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: var(--medium-space);
  width: var(--largest-space);
`;
