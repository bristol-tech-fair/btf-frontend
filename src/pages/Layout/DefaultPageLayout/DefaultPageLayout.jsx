import React from 'react';
import PropTypes from 'prop-types';
import { LayoutContainer } from './DefaultPageLayout.styles';
// import { Navbar } from '../../components/Navigation';
// import { Footer } from '../../components/Footer';

const DefaultPageLayout = ({ children }) => {
  return (
    <LayoutContainer>
      <h3>testing</h3>
      <p>test 2</p>
      {children}
    </LayoutContainer>
  );
};

DefaultPageLayout.propTypes = { children: PropTypes.node };

export default DefaultPageLayout;
