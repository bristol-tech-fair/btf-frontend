import React from 'react';
import PropTypes from 'prop-types';
import { SecondaryButtonWrapper } from './SecondaryButton.styles';

const SecondaryButton = ({ content, type = 'button', onClick }) => {
  return (
    <SecondaryButtonWrapper type={type} onClick={onClick}>
      {content}
    </SecondaryButtonWrapper>
  );
};

SecondaryButton.propTypes = {
  content: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  onClick: PropTypes.func
};

export default SecondaryButton;
