import React from 'react';
import PropTypes from 'prop-types';

const TextButton = ({ content, type = 'button', onClick }) => {
  return (
    <button type={type === 'submit' ? 'submit' : 'button'} onClick={onClick}>
      {content}
    </button>
  );
};

TextButton.propTypes = {
  content: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['submit', 'button']),
  onClick: PropTypes.func
};
export default TextButton;
