import React from 'react';
import PropTypes from 'prop-types';
import { PostCardWrapper } from './PostCard.styles';

const PostCard = ({ value }) => {
  return (
    <PostCardWrapper>
      <p>{value}</p>
    </PostCardWrapper>
  );
};

PostCard.propTypes = {
  value: PropTypes.string.isRequired
};

export default PostCard;
