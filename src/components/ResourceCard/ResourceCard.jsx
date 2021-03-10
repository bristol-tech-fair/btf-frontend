import React from 'react';
import PropTypes from 'prop-types';
import {
  Banner,
  Content,
  ContentTitle,
  ContentRating,
  ContentInfo
} from './ResourceCard.styles';
import { Heart, HeartFull } from '../Icons';
import { Small } from '../Banners';

const ResourceCard = ({ category, title, ages, rating, color, to }) => {
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
    <Content color={color} to={to}>
      <Banner>
        <Small color={color} />
      </Banner>
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
  );
};

ResourceCard.propTypes = {
  category: PropTypes.oneOf(['coding', 'maths', 'electronics']).isRequired,
  title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
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
