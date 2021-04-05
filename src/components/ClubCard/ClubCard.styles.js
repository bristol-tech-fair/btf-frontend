import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ContentContainer = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;

  background: var(--white);
  border: 0.1rem solid var(--lightblue);
  border-radius: var(--smallest-space);

  overflow: hidden;
  max-width: 32.8rem;

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
`;

export const Image = styled.img`
  border-radius: var(--smallest-space) var(--smallest-space) 0 0;
  overflow: hidden;
  object-fit: cover;
  width: 100%;
`;

export const Title = styled.h2`
  line-height: 130%;
  font-weight: 700;
  text-align: center;
  padding: var(--small-space) var(--smallest-space);
`;
