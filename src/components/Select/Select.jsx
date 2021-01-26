import React from 'react';
import PropTypes from 'prop-types';
import { SelectWrapper, select } from './Select.styles';

const Select = ({ name, label, onBlur, options, defaultValue }) => {
  return (
    <SelectWrapper>
      <label htmlFor={name}>{label}</label>

      <select name={name} id={name} onBlur={onBlur} value={defaultValue}>
        {options.map(({ optionValue, optionLabel }) => (
          <option
            key={optionLabel.id}
            className="select--option"
            value={optionValue}
          >
            {optionLabel}
          </option>
        ))}
      </select>
    </SelectWrapper>
  );
};

Select.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  defaultValue: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      optionValue: PropTypes.string.isRequired,
      optionLabel: PropTypes.string.isRequired
    })
  ).isRequired,
  onBlur: PropTypes.func.isRequired
};

export default Select;
