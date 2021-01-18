import React from 'react';
import PropTypes from 'prop-types';
import { svg } from './Icons.styles';

const Icon = (props) => {
  const {
    width,
    height,
    viewBox,
    fill,
    icon,
    stroke,
    strokeWidth,
    strokeLinecap,
    strokeLinejoin
  } = props;
  return (
    <svg
      style={svg.svg}
      width={width}
      height={height}
      viewBox={viewBox}
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d={icon}
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap={strokeLinecap}
        strokeLinejoin={strokeLinejoin}
      />
    </svg>
  );
};

Icon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  viewBox: PropTypes.number,
  icon: PropTypes.string.isRequired,
  fill: PropTypes.string,
  stroke: PropTypes.string,
  strokeWidth: PropTypes.number,
  strokeLinecap: PropTypes.string,
  strokeLinejoin: PropTypes.string
};

Icon.defaultProps = {
  width: 22,
  height: 22,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'var(--lightblue)',
  strokeWidth: '2',
  strokeLinecap: 'round',
  strokeLinejoin: 'round'
};

export default Icon;
