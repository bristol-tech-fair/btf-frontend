import React from 'react';
import PropTypes from 'prop-types';
import DefaultPageLayout from 'components/common/Layout/DefaultPageLayout';
import { PostsOpenWrapper } from './PostsOpen.styles';

const PostsOpen = ({ value }) => {
  return (
    <DefaultPageLayout>
      <PostsOpenWrapper>
        <p>{value}</p>
      </PostsOpenWrapper>
    </DefaultPageLayout>
  );
};

PostsOpen.propTypes = {
  value: PropTypes.string.isRequired
};

export default PostsOpen;
