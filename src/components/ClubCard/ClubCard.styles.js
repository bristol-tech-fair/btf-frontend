import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Content = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;

  background: var(--white);
  border: 0.1rem solid var(--lightblue);
  border-radius: var(--smallest-space);

  overflow: hidden;
  position: relative;
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
`;
