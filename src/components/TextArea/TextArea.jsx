import React from 'react';
import PropTypes from 'prop-types';
import { TextAreaWrapper } from './TextArea.styles';

const TextArea = ({ value }) => {
  return (
    <TextAreaWrapper>
      <p>{value}</p>
    </TextAreaWrapper>
  );
};

TextArea.propTypes = {
  value: PropTypes.string.isRequired
};

export default TextArea;
