import React from 'react';
// import PropTypes from 'prop-types';
import { ContentWrapper } from './ResourceCardOpen.styles';
import DefaultPageLayout from '../Layout/DefaultPageLayout';
import { Large } from '../../components/Banners';

const ResourceCardOpen = () => {
  return (
    <DefaultPageLayout>
      <Large />
      <ContentWrapper>
        <p>electronic</p>
        <h1>Title</h1>
        <div>some rank</div>
        <p />
        <div>button</div>
        <div />
        <div />
        <p />
        <div>button</div>
        <div />
      </ContentWrapper>
    </DefaultPageLayout>
  );
};

ResourceCardOpen.propTypes = {
  // bla: PropTypes.string,
};

ResourceCardOpen.defaultProps = {
  // bla: 'test',
};

export default ResourceCardOpen;
