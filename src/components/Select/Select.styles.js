import styled from 'styled-components';

export const SelectWrapper = styled.div`
  display: flex;
  flex-flow: column;
  position: relative;

  select {
    font-size: 1.6rem;
    cursor: pointer;
    -moz-appearance: none;
    -webkit-appearance: none;
    padding: var(--small-space);
    border: 0.1rem solid var(--lightblue);
    background: var(--lightgrey);
    border-radius: 0.5rem;

    placeholder {
      color: var(--darkgrey);
      font-size: 1rem;
    }
  }

  &::after {
    content: ' ';
    display: block;
    position: absolute;
    top: 5.2rem;
    right: var(--medium-space);
    width: 0;
    height: 0;
    border-left: 0.8rem solid transparent;
    border-right: 0.8rem solid transparent;
    border-top: 1.2rem solid var(--lightblue);
  }
`;
