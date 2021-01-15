import React from 'react';
import PropTypes from 'prop-types';
import { PrimaryButtonWrapper } from './PrimaryButton.styles';

const PrimaryButton = ({ value }) => {
  return <PrimaryButtonWrapper>{value}</PrimaryButtonWrapper>;
};

PrimaryButton.propTypes = {
  value: PropTypes.string.isRequired
};

export default PrimaryButton;
