import React from 'react';
// import PropTypes from 'prop-types';
import { LayoutContainer } from './Layout.styles';
import DefaultPageLayout from '../DefaultPageLayout';

const Layout = () => {
  return (
    <>
      <DefaultPageLayout>
        <LayoutContainer>I am a child of DefaultPageLayout!!!</LayoutContainer>
        <LayoutContainer>I am a child of DefaultPageLayout!!!</LayoutContainer>
        <LayoutContainer>I am a child of DefaultPageLayout!!!</LayoutContainer>
        <LayoutContainer>I am a child of DefaultPageLayout!!!</LayoutContainer>
        <LayoutContainer>I am a child of DefaultPageLayout!!!</LayoutContainer>
        <LayoutContainer>I am a child of DefaultPageLayout!!!</LayoutContainer>
      </DefaultPageLayout>
    </>
  );
};

Layout.propTypes = {};

export default Layout;
