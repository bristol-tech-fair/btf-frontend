import React from 'react';
import PropTypes from 'prop-types';
import { TextButtonWrapper } from './TextButton.styles';

const TextButton = ({ content }) => {
  return (
    <TextButtonWrapper>
      <button type="button">{content}</button>
    </TextButtonWrapper>
  );
};

TextButton.propTypes = {
  content: PropTypes.string.isRequired
};
export default TextButton;
