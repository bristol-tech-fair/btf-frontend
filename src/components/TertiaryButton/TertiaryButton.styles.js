import styled from 'styled-components';

export const TertiaryButtonWrapper = styled.button`
  padding: var(--smallest-space) var(--medium-space);

  text-align: center;

  border: 0.1rem solid;
  border-color: var(--lightblue);
  border-radius: 10rem;

  &:hover {
    color: var(--logopink);
    border-color: var(--logopink);
  }

  &:active,
  &:focus {
    color: var(--logopink);
    box-shadow: 0 0 0 0.4rem var(--logopink);
  }
`;
