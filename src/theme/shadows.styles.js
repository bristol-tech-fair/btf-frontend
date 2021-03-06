import { createGlobalStyle } from 'styled-components';

const Shadows = createGlobalStyle`
  :root {
    --card-shadow: 0 1rem 1rem rgba(0, 0, 0, 0.1);
    --modal-shadow: 0 0 6rem rgba(0, 0, 0, 0.5);
  }
`;

export default Shadows;
