import React from 'react';
import PropTypes from 'prop-types';
import { TertiaryButtonWrapper } from './TertiaryButton.styles';

const TertiaryButton = ({ value, colour }) => {
  return (
    <TertiaryButtonWrapper colour={colour}>
      <button type="submit">{value}</button>
    </TertiaryButtonWrapper>
  );
};

TertiaryButton.propTypes = {
  value: PropTypes.string.isRequired,
  colour: 'blue'
};

export default TertiaryButton;
