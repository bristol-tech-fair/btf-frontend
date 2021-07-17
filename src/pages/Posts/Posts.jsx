import React from 'react';
import PropTypes from 'prop-types';
import { PostsWrapper } from './Posts.styles';

const Posts = ({ value }) => {
  return (
    <PostsWrapper>
      <p>{value}</p>
      <h1>This is the Posts page. It is here to check the Router</h1>
    </PostsWrapper>
  );
};

Posts.propTypes = {
  value: PropTypes.string.isRequired
};

export default Posts;
