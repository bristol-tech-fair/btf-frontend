import React from 'react';
import PropTypes from 'prop-types';
import { TertiaryButtonWrapper } from './TertiaryButton.styles';

const TertiaryButton = ({ value, colour }) => {
  return (
    <TertiaryButtonWrapper colour={colour}>
      <p>{value}</p>
    </TertiaryButtonWrapper>
  );
};

TertiaryButton.propTypes = {
  value: PropTypes.string.isRequired,
  colour: 'blue'
};

export default TertiaryButton;
