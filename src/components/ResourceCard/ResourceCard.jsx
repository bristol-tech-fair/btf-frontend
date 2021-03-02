import React from 'react';
import PropTypes from 'prop-types';
import {
  CardWrapper,
  Pattern,
  Content,
  ContentTitle,
  ContentRating,
  ContentInfo
} from './ResourceCard.styles';
import { Heart, HeartFull } from '../Icons';
import { Small } from '../Pattern';

const ResourceCard = ({ category, title, ages, rating, color }) => {
  const condition = rating;
  let age = '';
  if (ages) {
    if (ages.length > 2) {
      age = 'error';
    } else {
      age = ages.map((value) => value).join('-');
    }
  }

  return (
    <CardWrapper color={color}>
      <Content>
        <Pattern>
          <Small color={color} />
        </Pattern>
        <ContentInfo>
          <p>
            <strong>{category}</strong>
          </p>
          <p>Ages: {age}</p>
        </ContentInfo>
        <ContentTitle>{title}</ContentTitle>
        <ContentRating>
          {condition > 0 ? <HeartFull /> : <Heart />}
          {condition > 1 ? <HeartFull /> : <Heart />}
          {condition > 2 ? <HeartFull /> : <Heart />}
          {condition > 3 ? <HeartFull /> : <Heart />}
          {condition > 4 ? <HeartFull /> : <Heart />}
        </ContentRating>
      </Content>
    </CardWrapper>
  );
};

ResourceCard.propTypes = {
  category: PropTypes.oneOf(['coding', 'maths', 'electronics']).isRequired,
  title: PropTypes.string.isRequired,
  ages: PropTypes.arrayOf(PropTypes.number).isRequired,
  rating: PropTypes.oneOf(['0', '1', '2', '3', '4', '5']),
  color: PropTypes.oneOf([
    'lightpink',
    'darkpink',
    'mattepink',
    'logopink',
    'lightgrey',
    'darkgrey',
    'darkburgundy',
    'orange',
    'lightblue',
    'midblue',
    'darkblue'
  ]).isRequired
};
export default ResourceCard;
