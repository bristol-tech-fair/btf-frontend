import React from 'react';
import PropTypes from 'prop-types';
import { TextAreaWrapper } from './TextArea.styles';

const TextArea = React.forwardRef(
  ({ id, name, label, placeholder, value, onChange }, ref) => {
    return (
      <TextAreaWrapper>
        <label htmlFor={id}>{label}</label>
        <textarea
          id={id}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          ref={ref}
        />
      </TextAreaWrapper>
    );
  }
);

TextArea.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func
};
TextArea.displayName = 'Textarea';

export default TextArea;
