import React from 'react';
import PropTypes from 'prop-types';
import { TextAreaWrapper } from './TextArea.styles';

const TextArea = ({ id, name, label, placeholder, value, onChange }) => {
  return (
    <TextAreaWrapper>
      <label htmlFor={id}>{label}</label>
      <textarea
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </TextAreaWrapper>
  );
};

TextArea.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func
};

export default TextArea;
