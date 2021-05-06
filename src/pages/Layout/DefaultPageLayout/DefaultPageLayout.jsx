import React from 'react';
import PropTypes from 'prop-types';
import {
  LayoutContainer,
  FooterContainer,
  HeaderContainer,
  MainContainer
} from './DefaultPageLayout.styles';
import Navigation from '../../../components/Navigation';
import Footer from '../../../components/Footer';

const DefaultPageLayout = ({ children }) => {
  return (
    <LayoutContainer>
      <HeaderContainer>
        <Navigation />
      </HeaderContainer>
      <MainContainer>{children}</MainContainer>
      <FooterContainer>
        <Footer />
      </FooterContainer>
    </LayoutContainer>
  );
};

DefaultPageLayout.propTypes = { children: PropTypes.node };

export default DefaultPageLayout;
