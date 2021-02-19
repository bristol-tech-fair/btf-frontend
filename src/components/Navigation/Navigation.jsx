import React from 'react';
import PropTypes from 'prop-types';
import { NavigationWrapper } from './Navigation.styles';

import Logo from '../Logo';
import TextButton from '../TextButton';

const Navigation = ({ value }) => {
  return (
    <NavigationWrapper>
      <Logo color="red" />
      <p>{value}</p>
      <TextButton content="Add a resource" />
    </NavigationWrapper>
  );
};

Navigation.propTypes = {
  value: PropTypes.string.isRequired
};

export default Navigation;
