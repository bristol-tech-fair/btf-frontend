import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { SelectInputWrapper } from './Select.styles';

const Select = React.forwardRef(
  ({ name, label, onBlur, options, placeholder = '', id, onChange }, ref) => {
    const [color, setColor] = useState(`var(--darkgrey)`);
    const [dropdown, setDropdown] = useState([]);

    useEffect(() => {
      setDropdown(options);
    }, [options]);

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
          ref={ref}
        >
          <option value={placeholder} hidden>
            {placeholder}
          </option>
          {dropdown.map((option) => (
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
  }
);

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
Select.displayName = 'Select';

export default Select;
