import React from 'react';
import PropTypes from 'prop-types';
import { Heart, HeartFull } from 'components/common/Icons';
import { Small } from 'components/common/Banners';
import {
  Banner,
  Content,
  ContentTitle,
  ContentRating,
  ContentCategory,
  ContentAges
} from './ResourceCard.styles';

const ResourceCard = ({ category, title, ages, rating, color, to }) => {
  const condition = rating;

  return (
    <Content color={color} to={to}>
      <Banner>
        <Small color={color} />
      </Banner>
      <ContentCategory>
        <strong>{category}</strong>
      </ContentCategory>
      <ContentAges>Ages: {ages}</ContentAges>
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
  category: PropTypes.oneOf(['Coding', 'Maths', 'Electronics']).isRequired,
  title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  ages: PropTypes.string.isRequired,
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
