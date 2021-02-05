import React from 'react';
import PropTypes from 'prop-types';
import PageContainer from '../components/PageContainer';

const PostPage = ({ match }) => {
  return (
    <PageContainer direction="column">
      <h1>Post Page</h1>
      <p>
        <strong>Post Title: </strong>
        {match.params.title}
      </p>
    </PageContainer>
  );
};

PostPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      title: PropTypes.node
    }).isRequired
  }).isRequired
};

export default PostPage;
