import React from 'react';
import PropTypes from 'prop-types';
import { LogoWrapper } from './Logo.styles';

const Logo = ({ width, height }) => {
  return <LogoWrapper width={width} height={height} />;
};

Logo.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number
};

export default Logo;
