import React from 'react';
import PropTypes from 'prop-types';
import {
  SelectWrapper,
  SelectLabel,
  SelectDropdown,
  SelectOption
} from './Select.styles';

const Select = ({ value }) => {
  return (
    <SelectWrapper>
      <SelectLabel htmlFor="select">{value}</SelectLabel>

      <SelectDropdown name="select" id="select">
        <SelectOption value="selectInstruction">
          Select an option...
        </SelectOption>
        <SelectOption value="example1">1</SelectOption>
        <SelectOption value="example2">2</SelectOption>
        <SelectOption value="example3">3</SelectOption>
      </SelectDropdown>
    </SelectWrapper>
  );
};

Select.propTypes = {
  value: PropTypes.string.isRequired
};

export default Select;
