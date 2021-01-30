import React from 'react';
import PropTypes from 'prop-types';
import { PrimaryButtonWrapper } from './PrimaryButton.styles';

const PrimaryButton = ({ content, type = 'button', onClick }) => {
  return (
    <PrimaryButtonWrapper type={type} onClick={onClick}>
      {content}
    </PrimaryButtonWrapper>
  );
};

PrimaryButton.propTypes = {
  content: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  onClick: PropTypes.func
};

export default PrimaryButton;
