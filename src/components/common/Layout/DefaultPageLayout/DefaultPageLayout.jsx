import React from 'react';
import PropTypes from 'prop-types';
import { LayoutContainer, MainContainer } from './DefaultPageLayout.styles';
import Navigation from '../../Navigation';
import Footer from '../../Footer';

const DefaultPageLayout = ({ children }) => {
  return (
    <LayoutContainer>
      <Navigation />
      <MainContainer>{children}</MainContainer>
      <Footer />
    </LayoutContainer>
  );
};

DefaultPageLayout.propTypes = { children: PropTypes.node };

export default DefaultPageLayout;
