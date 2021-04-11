import React from 'react';
import PropTypes from 'prop-types';
import {
  LayoutContainer,
  FooterPlaceholder,
  NavPlaceholder,
  Main
} from './DefaultPageLayout.styles';
import Navigation from '../../../components/Navigation';
import Footer from '../../../components/Footer';

const DefaultPageLayout = ({ children }) => {
  return (
    <LayoutContainer>
      <NavPlaceholder>
        <Navigation />
      </NavPlaceholder>
      <Main>{children}</Main>
      <FooterPlaceholder>
        <Footer />
      </FooterPlaceholder>
    </LayoutContainer>
  );
};

DefaultPageLayout.propTypes = { children: PropTypes.node };

export default DefaultPageLayout;
