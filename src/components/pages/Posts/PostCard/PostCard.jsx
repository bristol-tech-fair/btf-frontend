import React from 'react';
import PropTypes from 'prop-types';
import { ArrowCircleRight, Share, Bookmark } from 'components/common/Icons';
import {
  PostCardWrapper,
  Image,
  DateCategoryWrapper,
  Date,
  Title,
  IconWrapper,
  ReadMoreLink,
  LinkWrapper
} from './PostCard.styles';

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
        <LinkWrapper>
          <ArrowCircleRight />
          <ReadMoreLink to={postLink}>Read more</ReadMoreLink>
        </LinkWrapper>
        <LinkWrapper>
          <a href={shareLink} title="Share link">
            <Share />
          </a>
          <a href={bookmark} title="Bookmark link">
            <Bookmark />
          </a>
        </LinkWrapper>
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
