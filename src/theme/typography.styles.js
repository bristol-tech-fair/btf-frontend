import { createGlobalStyle } from 'styled-components';

const Typography = createGlobalStyle`
  *,
  button,
  input,
  label,
  select,
  button,
  textarea {
    font-family: "Lato", sans-serif;
    -webkit-font-smoothing: antialiased; /* Chrome, Safari */
    -moz-osx-font-smoothing: grayscale; /* Firefox */
    text-rendering: optimizeLegibility;
    font-weight: 400;
    color: var(--darkblue);
  }

  h1,
  h2,
  h3,
  h4 {
    font-weight: 900;
  }

  h1 {
    font-size: 3.6rem;
    line-height: 1.1;
  }

  h2 {
    font-size: 2.8rem;
    line-height: 1.1;
  }

  h3 {
    font-size: 2.4rem;
    line-height: 1.1;
  }

  h4 {
    font-size: 1.8rem;
    line-height: 1.1;

  }

  p,
  a,
  li,
  button,
  label,
  input,
  textarea,
  button {
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 2.4rem;
  }

  strong {
    font-weight: 700;
  }

  a {
    font-weight: 700;
  }


  @media (min-width: 600px) {
    h1 {
      font-size: 4rem;
    }

    h2 {
      font-size: 3.2rem;
    }

    h3 {
      font-size: 2.8rem;
    }
  }

  @media (min-width: 1024px) {
    h1 {
      font-size: 4.8rem;
    }

    h2 {
      font-size: 4rem;
    }

    h3 {
      font-size: 3.4rem;
    }
  }
`;

export default Typography;
