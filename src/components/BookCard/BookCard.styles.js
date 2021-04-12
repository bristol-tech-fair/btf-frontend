import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const BookCardWrapper = styled(Link)`
  background: var(--white);
  border: 0.1rem solid var(--lightblue);
  border-radius: var(--smallest-space);
  overflow: hidden;
  display: inline-block;
  padding: var(--smallest-space);
  max-width: 60rem;
  text-align: center;
  transition: all 100ms ease-in-out;
  cursor: pointer;

  & > img {
    width: 100%;
    object-fit: cover;
    margin-bottom: var(--small-space);
    border-radius: var(--smallest-space);
  }

  & > h3 {
    margin: 0 var(--medium-space) var(--small-space);
  }

  & > span {
    font-size: 1.6rem;
    font-weight: 700;
  }

  &:hover,
  &:active {
    transform: translateY(-1rem);
    box-shadow: var(--card-shadow);
  }

  &:focus {
    box-shadow: 0 0 0 0.3rem var(--lightblue);
  }
`;
