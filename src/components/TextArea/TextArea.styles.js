import styled from 'styled-components';

export const TextAreaWrapper = styled.div`
  display: flex;
  flex-direction: column;

  textarea {
    padding: var(--small-space);
    border: 0.1rem solid var(--lightblue);
    background: var(--lightgrey);
    border-radius: 0.5rem;
  }

  placeholder {
    color: var(--darkgrey);
    font-size: 1rem;
  }
`;
