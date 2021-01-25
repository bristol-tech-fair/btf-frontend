import styled from 'styled-components';

export const SVG = styled.svg.attrs((props) => ({
  viewBox: props.viewBox || '0 0 24 24',
  height: props.height || '22',
  width: props.width || '22',
  fill: props.fill || 'none',
  version: '1.1',
  xmlns: 'http://www.w3.org/2000/svg',
  xmlnsXlink: 'http://www.w3.org/1999/xlink'
}))``;

export const PATH = styled.path.attrs((props) => ({
  stroke: props.stroke || 'var(--lightblue)',
  strokeWidth: props.strokeWidth || '2',
  strokeLinecap: props.strokeLinecap || 'round',
  strokeLinejoin: props.strokeLinejoin || 'round'
}))``;
