import styled from 'styled-components';

export const TextInputWrapper = styled.div`
  input {
    padding: var(--small-space);
    border: 0.1rem solid var(--lightblue);
    background: var(--lightgrey);
    border-radius: 0.5rem;
    width: 30rem;
    height: 6rem;
  }

  label {
    display: flex;
    align-items: center;
    color: var(--darkblue);
    font-weight: bold;
  }

  placeholder {
    color: var(--darkgrey);
  }
`;
