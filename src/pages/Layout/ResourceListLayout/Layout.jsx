import React from 'react';
// import PropTypes from 'prop-types';
import { LayoutContainer, TestComp, FlexList } from './Layout.styles';
import DefaultPageLayout from '../DefaultPageLayout';
import ResourceCard from '../../../components/ResourceCard';

const Layout = () => {
  return (
    <>
      <DefaultPageLayout>
        <LayoutContainer>
          I am a child of DefaultPageLayout!!! H3 TAG
        </LayoutContainer>
        <FlexList>
          <TestComp>
            <ResourceCard />
          </TestComp>
          <TestComp>
            <ResourceCard />
          </TestComp>
          <TestComp>
            <ResourceCard />
          </TestComp>
          <TestComp>
            <ResourceCard />
          </TestComp>
          <TestComp>
            <ResourceCard />
          </TestComp>
          <TestComp>
            <ResourceCard />
          </TestComp>
          <TestComp>
            <ResourceCard />
          </TestComp>
          <TestComp>
            <ResourceCard />
          </TestComp>
          <TestComp>
            <ResourceCard />
          </TestComp>
        </FlexList>
      </DefaultPageLayout>
    </>
  );
};

Layout.propTypes = {};

export default Layout;
