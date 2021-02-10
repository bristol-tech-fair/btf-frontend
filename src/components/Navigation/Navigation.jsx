import React from 'react';
import PropTypes from 'prop-types';
import { NavigationWrapper } from './Navigation.styles';

const Navigation = ({ value }) => {
  return (
    <NavigationWrapper>
      <p>{value}</p>
    </NavigationWrapper>
  );
};

Navigation.propTypes = {
  value: PropTypes.string.isRequired
};

export default Navigation;
