import styled from 'styled-components';

export const SVG = styled.svg.attrs((props) => ({
  fill: 'none',
  viewBox: props.viewBox || '0 0 340 162',
  height: props.height || '162',
  width: props.width || '340',
  version: '1.1',
  xmlns: 'http://www.w3.org/2000/svg',
  xmlnsXlink: 'http://www.w3.org/1999/xlink',
  role: 'img',
  ariaLabeledby: 'loveTitle loveDesc'
}))``;
