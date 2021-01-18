import React from 'react';
import PropTypes from 'prop-types';
import { TertiaryButtonWrapper } from './TertiaryButton.styles';

const TertiaryButton = ({ value }) => {
  return (
    <TertiaryButtonWrapper>
      <p>{value}</p>
    </TertiaryButtonWrapper>
  );
};

TertiaryButton.propTypes = {
  value: PropTypes.string.isRequired
};

export default TertiaryButton;
