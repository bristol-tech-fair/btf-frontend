import React from 'react';
import PropTypes from 'prop-types';
import { TermsWrapper } from './Terms.styles';

const TermsAndConditions = ({ value }) => {
  return (
    <TermsWrapper>
      <p>{value}</p>
    </TermsWrapper>
  );
};

TermsAndConditions.propTypes = {
  value: PropTypes.string.isRequired
};

export default TermsAndConditions;
