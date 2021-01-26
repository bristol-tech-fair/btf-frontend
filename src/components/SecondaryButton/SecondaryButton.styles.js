import styled from 'styled-components';

export const SecondaryButtonWrapper = styled.button`
&,
&:active,
&:focus {    
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--lightblue);
  color: var(--lightgrey);
  font-weight: 700;
  padding: var(--smallest-space) var(--small-space);
  border-radius: 6.25rem;
  &:hover {
    background: var(--logopink);
    color: var(--lightgrey);
  }
`;
