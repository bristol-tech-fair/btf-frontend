import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import InputBase from './InputBase.styles';

const Select = ({
  name,
  label,
  onBlur,
  options,
  placeholder = '',
  id,
  onChange
}) => {
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

const SelectInputWrapper = styled(InputBase)`
  display: flex;
  flex-direction: column;
  position: relative;

  select {
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;

    font-size: 1.6rem;
  }

  &::after {
    content: ' ';
    display: block;
    position: absolute;
    top: 4.9rem;
    right: var(--small-space);
    width: 0;
    height: 0;
    border-left: 0.8rem solid transparent;
    border-right: 0.8rem solid transparent;
    border-top: 1.2rem solid var(--lightblue);
  }
`;

export default Select;
