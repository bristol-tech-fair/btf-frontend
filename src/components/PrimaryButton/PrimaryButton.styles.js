import styled from 'styled-components';

export const PrimaryButtonWrapper = styled.button`
  &,
  &:active,
  &:focus {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: var(--small-space) var(--large-space);
    border-radius: 5px;
    background: var(--lightblue);
    color: var(--lightgrey);
    font-weight: 700;
  }

  &:hover {
    background: var(--logopink);
    color: var(--lightgrey);
  }
`;
