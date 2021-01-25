import styled from 'styled-components';

export const SVG = styled.svg.attrs((props) => ({
  fill: props.filled ? 'var(--lightpink)' : 'none',
  viewBox: props.viewBox || '0 0 24 24',
  height: props.height || '22',
  width: props.width || '22',
  version: '1.1',
  xmlns: 'http://www.w3.org/2000/svg',
  xmlnsXlink: 'http://www.w3.org/1999/xlink'
}))``;

export const PATH = styled.path.attrs((props) => ({
  strokeWidth: props.strokeWidth || '2',
  stroke: props.isPink ? 'var(--lightpink)' : 'var(--lightblue)',
  strokeLinecap: props.strokeLinecap || 'round',
  strokeLinejoin: props.strokeLinejoin || 'round'
}))``;
