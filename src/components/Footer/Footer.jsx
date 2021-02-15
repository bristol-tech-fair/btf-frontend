import React from 'react';
import PropTypes from 'prop-types';
import { FooterWrapper } from './Footer.styles';

const Footer = ({ value }) => {
  return (
    <FooterWrapper>
      <p>{value}</p>
    </FooterWrapper>
  );
};

Footer.propTypes = {
  value: PropTypes.string.isRequired
};

export default Footer;
