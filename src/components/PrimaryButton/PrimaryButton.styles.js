import styled from 'styled-components';

export const PrimaryButtonWrapper = styled.button`
  padding: var(--small-space) var(--large-space);
  border-radius: 0.5rem;
  background: var(--lightblue);
  color: var(--lightgrey);
  font-weight: 700;

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
