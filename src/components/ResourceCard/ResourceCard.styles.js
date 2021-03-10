import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Banner = styled.div`
  display: flex;
  align-self: flex-start;
  border-radius: var(--smallest-space) var(--smallest-space) 0 0;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  opacity: 0.6;
  overflow: hidden;
`;

export const Content = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: var(--largest-space) var(--smallest-space) var(--medium-space);
  max-width: 30.8rem;
  min-width: 24rem;
  height: 35.1rem;
  position: relative;
  background: var(--white);
  border: ${({ color }) => `0.1rem solid var(--${color})`};
  box-sizing: border-box;
  border-radius: var(--smallest-space);
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

export const ContentInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 12rem;
  margin: var(--small-space) 0;
  color: var(--darkblue);
  text-transform: capitalize;
`;

export const ContentTitle = styled.h3`
  text-align: center;
  margin-top: var(--small-space);
`;

export const ContentRating = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: absolute;
  top: 28.7rem;
  width: var(--largest-space);
  margin: var(--small-space) 0;
  padding: 0;
`;
