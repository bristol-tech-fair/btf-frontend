import React from 'react';
import PropTypes from 'prop-types';
import { CookiePolicyWrapper } from './CookiePolicy.styles';

const CookiePolicy = ({ value }) => {
  return (
    <CookiePolicyWrapper>
      <p>{value}</p>
    </CookiePolicyWrapper>
  );
};

CookiePolicy.propTypes = {
  value: PropTypes.string.isRequired
};

export default CookiePolicy;
