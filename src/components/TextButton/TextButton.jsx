import React from 'react';
import PropTypes from 'prop-types';
import { TextButtonWrapper } from './TextButton.styles';

const TextButton = ({ content, type = 'button', onClick }) => {
  return (
    <TextButtonWrapper
      type={type === 'submit' ? 'submit' : 'button'}
      onClick={onClick}
    >
      {content}
    </TextButtonWrapper>
  );
};

TextButton.propTypes = {
  content: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['submit', 'button']),
  onClick: PropTypes.func
};

export default TextButton;
