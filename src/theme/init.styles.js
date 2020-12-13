import { createGlobalStyle } from 'styled-components';

const Init = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
  }

  button,
  button:active,
  button:focus {
    background: none;
    outline: none;
    border: none;
  }

  a,
  a:active,
  a:focus {
    text-decoration: none;
    color: inherit;
    outline: none; /* Works in Firefox, Chrome, IE8 and above */
  }

  /* Set base as ten so rem units have a standardised base point */
  html {
    font-size: 10px;
  }

  ol,
  ul {
    list-style: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
`;

export default Init;
