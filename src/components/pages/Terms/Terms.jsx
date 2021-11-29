import React from 'react';
import PropTypes from 'prop-types';
import DefaultPageLayout from 'components/common/Layout/DefaultPageLayout';
import { TermsWrapper } from './Terms.styles';

const TermsAndConditions = ({ value }) => {
  return (
    <DefaultPageLayout>
      <TermsWrapper>
        <p>{value}</p>
        <h1>
          This is the Terms & Conditions page. It is here to check the Router
        </h1>
      </TermsWrapper>
    </DefaultPageLayout>
  );
};

TermsAndConditions.propTypes = {
  value: PropTypes.string.isRequired
};

export default TermsAndConditions;
