import React from 'react';
import PropTypes from 'prop-types';
import PageContainer from '../components/PageContainer';

const ResourcePage = ({ match }) => {
  return (
    <PageContainer direction="column">
      <h1>Resource Page</h1>
      <p>
        <strong>Book Title: </strong>
        {match.params.title}
      </p>
    </PageContainer>
  );
};

ResourcePage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      title: PropTypes.node
    }).isRequired
  }).isRequired
};

export default ResourcePage;
