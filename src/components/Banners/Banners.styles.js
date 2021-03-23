import styled from 'styled-components';

export const SVG = styled.svg.attrs(() => ({
  height: 'auto',
  width: '100%',
  version: '1.1',
  xmlns: 'http://www.w3.org/2000/svg',
  xmlnsXlink: 'http://www.w3.org/1999/xlink'
}))`
  fill: ${({ color }) => `var(--${color})`};
`;
