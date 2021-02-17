import styled from 'styled-components';

const InputWrapper = styled.div`
  input,
  textarea,
  select {
    padding: var(--small-space) var(--smallest-space);
    border: 0.1rem solid var(--lightblue);
    background: var(--lightgrey);
    border-radius: 0.5rem;
  }

  placeholder {
    color: var(--darkgrey);
    font-size: 1rem;
  }
`;

export default InputWrapper;
