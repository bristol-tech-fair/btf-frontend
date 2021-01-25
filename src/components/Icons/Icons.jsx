import React from 'react';
import PropTypes from 'prop-types';
import { SVG, PATH } from './Icons.styles';

const Icon = ({ width, fill, height, icon, stroke }) => {
  return (
    <>
      <SVG width={width} height={height} fill={fill}>
        <PATH d={icon} stroke={stroke} />
      </SVG>
    </>
  );
};
Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  fill: PropTypes.string,
  stroke: PropTypes.string
};

export default Icon;
