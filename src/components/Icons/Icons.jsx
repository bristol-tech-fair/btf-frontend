import React from 'react';
import PropTypes from 'prop-types';
import { SVG, PATH } from './Icons.styles';

const Icon = ({ width, filled, height, icon, stroke }) => {
  return (
    <>
      <SVG width={width} height={height} filled={filled}>
        <PATH d={icon} stroke={stroke} />
      </SVG>
    </>
  );
};
Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  filled: PropTypes.string,
  stroke: PropTypes.string
};

export default Icon;
