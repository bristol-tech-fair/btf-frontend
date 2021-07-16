import React from 'react';
import PropTypes from 'prop-types';
import { TandCWrapper } from './TandC.styles';

const TermsAndConditions = ({ value }) => {
  return (
    <TandCWrapper>
      <p>{value}</p>
    </TandCWrapper>
  );
};

TermsAndConditions.propTypes = {
  value: PropTypes.string.isRequired
};

export default TermsAndConditions;
