import React from 'react';
import PropTypes from 'prop-types';
import { LayoutContainer, MainContainer } from './DefaultPageLayout.styles';
import Navigation from '../../../components/Navigation';
import Footer from '../../../components/Footer';

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
