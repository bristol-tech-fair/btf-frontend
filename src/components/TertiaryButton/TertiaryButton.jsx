import React from 'react';
import PropTypes from 'prop-types';
import { TertiaryButtonWrapper } from './TertiaryButton.styles';

const TertiaryButton = ({ content, onClick, type = 'button' }) => {
  return (
    <TertiaryButtonWrapper type={type} onClick={onClick}>
      {content}
    </TertiaryButtonWrapper>
  );
};

TertiaryButton.propTypes = {
  content: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['submit', 'button', 'reset']),
  onClick: PropTypes.func
};

export default TertiaryButton;
