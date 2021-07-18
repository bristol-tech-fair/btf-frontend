import React from 'react';
import PropTypes from 'prop-types';
import { PostsOpenWrapper } from './PostsOpen.styles';

const PostsOpen = ({ value }) => {
  return (
    <PostsOpenWrapper>
      <p>{value}</p>
    </PostsOpenWrapper>
  );
};

PostsOpen.propTypes = {
  value: PropTypes.string.isRequired
};

export default PostsOpen;
