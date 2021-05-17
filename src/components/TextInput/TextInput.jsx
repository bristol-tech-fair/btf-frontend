import React from 'react';
import PropTypes from 'prop-types';
import { TextInputWrapper } from './TextInput.styles';

const TextInput = ({
  id,
  label,
  value,
  name,
  handleOnChange,
  placeholder,
  ...inputProps
}) => {
  return (
    <TextInputWrapper>
      <label htmlFor={name}>{label}</label>
      <input
        name={name}
        id={name}
        onChange={handleOnChange}
        value={value}
        placeholder={placeholder}
        {...inputProps}
      />
    </TextInputWrapper>
  );
};

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  handleOnChange: PropTypes.func,
  placeholder: PropTypes.string
};

export default TextInput;
