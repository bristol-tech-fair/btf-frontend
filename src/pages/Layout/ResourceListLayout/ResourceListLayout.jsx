import React from 'react';
import PropTypes from 'prop-types';
import {
  LayoutContainer,
  HeaderContainer,
  MainContainer
} from './ResourceListLayout.styles';
import Navigation from '../../../components/Navigation';

const ResourceListLayout = ({ children }) => {
  return (
    <LayoutContainer>
      <HeaderContainer>
        <Navigation />
      </HeaderContainer>
      <MainContainer>{children}</MainContainer>
    </LayoutContainer>
  );
};

ResourceListLayout.propTypes = { children: PropTypes.node };

export default ResourceListLayout;
