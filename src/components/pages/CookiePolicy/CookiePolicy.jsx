import React from 'react';
import PropTypes from 'prop-types';
import DefaultPageLayout from 'components/common/Layout/DefaultPageLayout';
import { CookiePolicyWrapper } from './CookiePolicy.styles';

const CookiePolicy = ({ value }) => {
  return (
    <DefaultPageLayout>
      <CookiePolicyWrapper>
        <p>{value}</p>
        <h1>This is the Cookie Monster not the Policy</h1>
      </CookiePolicyWrapper>
    </DefaultPageLayout>
  );
};

CookiePolicy.propTypes = {
  value: PropTypes.string.isRequired
};

export default CookiePolicy;
