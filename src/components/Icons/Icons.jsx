import React from 'react';
import PropTypes from 'prop-types';
import { IconWrapper } from './Icons.styles';

const Icons = ({ value }) => {
  return (
    <IconWrapper>
      <p>{value}</p>
    </IconWrapper>
  );
};

Icons.propTypes = {
  value: PropTypes.string.isRequired
};

export default Icons;
