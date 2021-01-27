import React from 'react';
import PropTypes from 'prop-types';
import { TextAreaWrapper } from './TextArea.styles';

const TextArea = ({
  id,
  name,
  labelText,
  placeholder,
  value,
  onChange
}) => {
  return (
    <TextAreaWrapper>
      <label htmlFor={id}>{labelText}</label>
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
  id: PropTypes.string,
  name: PropTypes.string,
  labelText: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func
};

export default TextArea;
