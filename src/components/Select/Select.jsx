import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { SelectInputWrapper } from './Select.styles';

const Select = ({
  name,
  label,
  onBlur,
  options,
  placeholder,
  id,
  onChange
}) => {
  const [color, setColor] = useState(`var(--darkgrey)`);

  function changeColor() {
    setColor(`var(--darkblue)`);
  }
  return (
    <SelectInputWrapper>
      <label htmlFor={id}>{label}</label>
      <select
        name={name}
        id={id}
        onBlur={onBlur}
        style={{ color }}
        onChange={onChange}
      >
        <option value={placeholder} hidden>
          {placeholder}
        </option>
        {options.map((option) => (
          <option
            onClick={changeColor}
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
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired
    })
  ).isRequired,
  onBlur: PropTypes.func
};

export default Select;
