import React from 'react';
import PropTypes from 'prop-types';
import { TextInputWrapper } from './TextInput.styles';

const TextInput = ({ label, defaultValue, name, onChange }) => {
  return (
    <TextInputWrapper>
      <label htmlFor={name}>{label}</label>
      <input name={name} id={name} onChange={onChange} value={defaultValue} />
    </TextInputWrapper>
  );
};

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  defaultValue: PropTypes.string,
  onChange: PropTypes.func.isRequired
};

export default TextInput;
