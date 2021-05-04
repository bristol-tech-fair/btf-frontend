import styled from 'styled-components';

export const SelectTag = styled.select`
  cursor: pointer;
  color: var(--darkgrey);
  font-size: 1.6rem;

  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
`;

export const LabelTag = styled.label`
  color: var(--darkblue);
`;

export const SelectContainer = styled.div`
  display: flex;
  flex-flow: column;
  position: relative;

  select {
    cursor: pointer;
    color: var(--darkgrey);
    font-size: 1.6rem;

    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
  }

  &::after {
    content: ' ';
    display: block;
    position: absolute;
    top: 2.5rem;
    right: var(--smallest-space);
    width: 0;
    height: 0;
    border-left: 0.8rem solid transparent;
    border-right: 0.8rem solid transparent;
    border-top: 1.2rem solid var(--lightblue);
  }
`;
