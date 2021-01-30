import React from 'react';
import PropTypes from 'prop-types';
import { LogoWrapper } from './Logo.styles';

const Logo = ({ color = 'red' }) => {
  return <LogoWrapper color={color} />;
};

Logo.propTypes = {
  color: PropTypes.oneOf(['red', 'blue'])
};

export default Logo;
