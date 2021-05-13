import React from 'react';
import PropTypes from 'prop-types';
import { TextInputWrapper } from './TextInput.styles';

const TextInput = ({
  label,
  defaultValue,
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
        value={defaultValue}
        placeholder={placeholder}
        {...inputProps}
      />
    </TextInputWrapper>
  );
};

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  defaultValue: PropTypes.string,
  handleOnChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string
};

export default TextInput;
