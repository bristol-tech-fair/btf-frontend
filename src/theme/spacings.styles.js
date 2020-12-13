import { createGlobalStyle } from 'styled-components';

const Spacings = createGlobalStyle`
  :root {
    --smallest-space: 1rem;
    --small-space: 2rem;
    --medium-space: 4rem;
    --large-space: 8rem;
    --largest-space: 16rem;
  }
`;

export default Spacings;
