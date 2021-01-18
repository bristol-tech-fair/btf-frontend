import React from 'react';
import PropTypes from 'prop-types';
import { SelectWrapper } from './Select.styles';

const Select = ({ value }) => {
  return (
    <SelectWrapper>
      <p>{value}</p>
    </SelectWrapper>
  );
};

Select.propTypes = {
  value: PropTypes.string.isRequired
};

export default Select;
