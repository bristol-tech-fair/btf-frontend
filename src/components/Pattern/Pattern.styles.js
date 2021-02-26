import styled from 'styled-components';

export const PatternWrapper = styled.div`
  .pattern-bg {
    fill: ${({ color }) => `var(--${color})`};
  }
`;

// Styling component is used  as global (reusable) styling for large, Medium, Small banners.
export const SVG = styled.svg.attrs(() => ({
  height: 'inherit',
  width: 'inherit',
  version: '1.1',
  xmlns: 'http://www.w3.org/2000/svg',
  xmlnsXlink: 'http://www.w3.org/1999/xlink'
}))`
  fill: ${({ color }) => `var(--${color})`};
  // Delete class styling below. It is only for testing purpose.
  .pattern-color {
    fill: green;
  }
`;
