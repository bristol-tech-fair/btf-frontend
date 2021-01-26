import styled from 'styled-components';

export const SelectWrapper = styled.div`
  padding: var(--small-space);
  border: 0.1rem solid var(--logopink);
`;

export const select = styled.select`
  display: block;
  border: 0.1rem solid var(--lightblue);
  border-radius: 4px;
  background-color: var(--lightgrey);
  color: var(--darkgrey);
  padding: var(--smallest-space);
  padding-left: 0;
  width: 100%;
  max-width: 500px;
`;
