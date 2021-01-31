import { css } from 'styled-components';

const breakpoints = {
  large: 1024,
  small: 600
};

export default Object.keys(breakpoints).reduce((queries, label) => {
  queries[label] = (...args) => css`
    @media (min-width: ${breakpoints[label]}px) {
      ${css(...args)};
    }
  `;
  return queries;
}, {});
