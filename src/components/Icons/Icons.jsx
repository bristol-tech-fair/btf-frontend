import React from 'react';
import PropTypes from 'prop-types';
import { IconsWrapper } from './Icons.styles';

const Icons = ({ value }) => {
  return (
    <IconsWrapper>
      <p>{value}</p>
    </IconsWrapper>
  );
};

Icons.propTypes = {
  value: PropTypes.string.isRequired
};

export default Icons;
