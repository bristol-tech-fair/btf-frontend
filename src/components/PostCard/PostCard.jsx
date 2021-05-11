import React from 'react';
import PropTypes from 'prop-types';
import {
  PostCardWrapper,
  Image,
  DateCategoryWrapper,
  Date,
  Title,
  IconWrapper,
  MoreLink,
  MoreLinkWrapper
} from './PostCard.styles';
import { ArrowCircleRight, Share, Bookmark } from '../Icons';

const PostCard = ({
  coverUrl,
  category,
  date,
  title,
  postLink,
  shareLink,
  bookmark
}) => {
  return (
    <PostCardWrapper>
      <Image src={coverUrl} alt={title} />
      <DateCategoryWrapper>
        <p>{category}</p>
        <Date>{date}</Date>
      </DateCategoryWrapper>
      <Title>{title}</Title>
      <IconWrapper>
        <MoreLinkWrapper>
          <ArrowCircleRight />
          <MoreLink to={postLink}>Read more</MoreLink>
        </MoreLinkWrapper>
        <MoreLinkWrapper>
          <a href={shareLink}>
            <Share />
          </a>
          <a href={bookmark}>
            <Bookmark />
          </a>
        </MoreLinkWrapper>
      </IconWrapper>
    </PostCardWrapper>
  );
};

PostCard.propTypes = {
  coverUrl: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  postLink: PropTypes.string.isRequired,
  shareLink: PropTypes.string.isRequired,
  bookmark: PropTypes.string.isRequired
};

export default PostCard;
