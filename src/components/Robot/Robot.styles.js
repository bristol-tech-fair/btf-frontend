import styled from 'styled-components';

export const SVG = styled.svg.attrs((props) => ({
  fill: 'none',
  viewBox: props.viewBox || '0 0 295 263',
  height: props.height || '295',
  width: props.width || '263',
  version: '1.1',
  xmlns: 'http://www.w3.org/2000/svg',
  xmlnsXlink: 'http://www.w3.org/1999/xlink',
  role: 'img',
  ariaLabeledby: 'robotTitle robotDesc'
}))``;
