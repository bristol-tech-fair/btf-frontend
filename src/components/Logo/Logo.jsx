import React from 'react';
import PropTypes from 'prop-types';
import { LogoWrapper } from './Logo.styles';

const Logo = ({ value }) => {
  return (
    <LogoWrapper>
      <p>{value}</p>
    </LogoWrapper>
  );
};

Logo.propTypes = {
  value: PropTypes.string.isRequired
};

export default Logo;
