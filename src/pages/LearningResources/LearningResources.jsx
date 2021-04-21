import React from 'react';
// import PropTypes from 'prop-types';
import DefaultPageLayout from '../Layout/DefaultPageLayout';

const LearningResources = () => {
  return (
    <DefaultPageLayout>
      <h1>We have header</h1>
      <h3>
        <span>below will be filter</span>
        <div>Here we will have a list of resource cards</div>
      </h3>
      <h3>and we insert button to show more resources</h3>
    </DefaultPageLayout>
  );
};

// LearningResources.propTypes = { list: PropTypes.node };

export default LearningResources;
