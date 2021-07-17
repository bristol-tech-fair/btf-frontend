import React from 'react';
import PropTypes from 'prop-types';
import { TermsWrapper } from './Terms.styles';

const TermsAndConditions = ({ value }) => {
  return (
    <TermsWrapper>
      <p>{value}</p>
      <h1>
        This is the Terms & Conditions page. It is here to check the Router
      </h1>
    </TermsWrapper>
  );
};

TermsAndConditions.propTypes = {
  value: PropTypes.string.isRequired
};

export default TermsAndConditions;
