import styled from 'styled-components';

export const SecondaryButtonWrapper = styled.button`
  background: var(--lightblue);
  color: var(--lightgrey);
  padding: var(--smallest-space) var(--medium-space);
  border-radius: 10rem;

  &:hover {
    background: var(--logopink);
    color: var(--lightgrey);
  }

  &:active,
  &:focus {
    background: var(--logopink);
    color: var(--lightgrey);
    box-shadow: 0 0 0 0.4rem var(--darkpink);
  }
`;
