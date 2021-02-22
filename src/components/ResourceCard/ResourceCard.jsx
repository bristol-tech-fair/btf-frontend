import React from 'react';
import PropTypes from 'prop-types';
import {
  CardWrapper,
  Pattern,
  ContentTitle,
  ContentRating,
  Content,
  ContentInfo,
  InfoCategory,
  InfoAges,
  RatingOne,
  RatingTwo,
  RatingThree,
  RatingFour,
  RatingFive
} from './ResourceCard.styles';
import { Heart, HeartFull } from '../Icons';
import SmallOrange from './Orange';

const ResourceCard = ({ category, title, ageMin, ageMax, rating, pattern }) => {
  const condition = rating;
  const color = pattern;
  return (
    /**
        Resorurce Card border color must match
        color of used PATTERN
     */
    <CardWrapper color={color}>
      {/**
       * Imported PATTERN is biger than container
       * whitch supose to hold it.
       * Each pattern must INHERIT width and height of container
       */}
      <Pattern>
        {/**
         * Need to set pattern as props
         */}
        {color === 'SmallOrange' ? (
          <SmallOrange />
        ) : (
          <p>something went wrong</p>
        )}
      </Pattern>
      <Content>
        <ContentInfo>
          <InfoCategory>{category}</InfoCategory>
          <InfoAges>
            Ages: {ageMin}-{ageMax}
          </InfoAges>
        </ContentInfo>
        <ContentTitle>{title}</ContentTitle>
        {/**
         * Rating is set by passing props
         *
         */}
        <ContentRating>
          <RatingOne>{condition > 0 ? <HeartFull /> : <Heart />}</RatingOne>
          <RatingTwo>{condition > 1 ? <HeartFull /> : <Heart />}</RatingTwo>
          <RatingThree>{condition > 2 ? <HeartFull /> : <Heart />}</RatingThree>
          <RatingFour>{condition > 3 ? <HeartFull /> : <Heart />}</RatingFour>
          <RatingFive>{condition > 4 ? <HeartFull /> : <Heart />}</RatingFive>
        </ContentRating>
      </Content>
    </CardWrapper>
  );
};

ResourceCard.propTypes = {
  category: PropTypes.oneOf(['coding', 'maths', 'electronics']).isRequired,
  pattern: PropTypes.oneOf([
    'SmallOrange',
    'SmallMidblue',
    'SmallLogopink',
    'SmallLightblue'
  ]).isRequired,
  title: PropTypes.string.isRequired,
  ageMin: PropTypes.number.isRequired,
  ageMax: PropTypes.number.isRequired,
  rating: PropTypes.oneOf([...new Array(6)].map((_, i) => i))
};
export default ResourceCard;
