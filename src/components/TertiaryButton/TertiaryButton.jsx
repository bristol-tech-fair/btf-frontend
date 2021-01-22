import React from 'react';
import PropTypes from 'prop-types';
import { TertiaryButtonWrapper } from './TertiaryButton.styles';

const TertiaryButton = ({ content, colour, onClick, type = 'button' }) => {
  return (
    <TertiaryButtonWrapper colour={colour}>
      <button type={type === 'submit' ? 'submit' : 'button'} onClick={onClick}>
        {content}
      </button>
    </TertiaryButtonWrapper>
  );
};

TertiaryButton.propTypes = {
  content: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['submit', 'button']),
  onClick: PropTypes.func,

  colour: 'blue'
};

export default TertiaryButton;
