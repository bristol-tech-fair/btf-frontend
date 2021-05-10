import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { SelectInputWrapper } from './Select.styles';

const Select = ({ name, label, onBlur, options, placeholder }) => {
  const [color, setColor] = useState(`var(--darkgrey)`);

  function changeColor() {
    setColor(`var(--darkblue)`);
  }
  return (
    <SelectInputWrapper>
      <label htmlFor={name}>{label}</label>
      <select
        name={name}
        id={name}
        onBlur={onBlur}
        style={{ color }}
        onChange={changeColor}
      >
        <option value="" selected disabled hidden>
          {placeholder}
        </option>
        {options.map((option) => (
          <option
            key={option.label}
            className="select--option"
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </select>
    </SelectInputWrapper>
  );
};

Select.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired
    })
  ).isRequired,
  onBlur: PropTypes.func.isRequired
};

export default Select;
