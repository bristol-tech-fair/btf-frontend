import React from 'react';
import PropTypes from 'prop-types';
import { PostsWrapper } from './Posts.styles';

const Posts = ({ value }) => {
  return (
    <PostsWrapper>
      <p>{value}</p>
    </PostsWrapper>
  );
};

Posts.propTypes = {
  value: PropTypes.string.isRequired
};

export default Posts;
