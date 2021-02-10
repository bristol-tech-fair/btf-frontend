import styled from 'styled-components';

export const TextButtonWrapper = styled.button`
  &:active,
  &:focus {
    color: var(--logopink);
    border-bottom: 0.2rem var(--logopink) solid;
  }
`;
