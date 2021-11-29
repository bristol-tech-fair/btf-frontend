import React from 'react';
import PropTypes from 'prop-types';
import DefaultPageLayout from 'components/common/Layout/DefaultPageLayout';
import { PostsWrapper } from './Posts.styles';

const Posts = ({ value }) => {
  return (
    <DefaultPageLayout>
      <PostsWrapper>
        <p>{value}</p>
        <h1>This is the Posts page. It is here to check the Router</h1>
      </PostsWrapper>
    </DefaultPageLayout>
  );
};

Posts.propTypes = {
  value: PropTypes.string.isRequired
};

export default Posts;
