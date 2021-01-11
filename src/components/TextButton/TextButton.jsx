import React from 'react';
import PropTypes from 'prop-types';
import { TextButtonWrapper } from './TextButton.styles';

const TextButton = ({ content, type, onClick }) => {
  return (
    <TextButtonWrapper type={type} onClick={onClick}>
      {content}
    </TextButtonWrapper>
  );
};

TextButton.propTypes = {
  content: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func
};
export default TextButton;
