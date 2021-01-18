import React from 'react';
import PropTypes from 'prop-types';
import { SelectWrapper, SelectDropdown } from './Select.styles';

const Select = ({ value }) => {
  return (
    <SelectWrapper>
      <label htmlFor="select">{value}</label>

      <SelectDropdown name="select" id="select">
        <option value="selectInstruction">Select an option...</option>
        <option value="example1">1</option>
        <option value="example2">2</option>
        <option value="example3">3</option>
      </SelectDropdown>
    </SelectWrapper>
  );
};

Select.propTypes = {
  value: PropTypes.string.isRequired
};

export default Select;
