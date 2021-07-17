import React from 'react';
import PropTypes from 'prop-types';
import { CookiePolicyWrapper } from './CookiePolicy.styles';

const CookiePolicy = ({ value }) => {
  return (
    <CookiePolicyWrapper>
      <p>{value}</p>
      <h1>This is the Cookie Monster not the Policy</h1>
    </CookiePolicyWrapper>
  );
};

CookiePolicy.propTypes = {
  value: PropTypes.string.isRequired
};

export default CookiePolicy;
