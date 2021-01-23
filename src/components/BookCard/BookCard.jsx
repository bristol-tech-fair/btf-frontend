import React from 'react';
import PropTypes from 'prop-types';
import { BookCardWrapper } from './BookCard.styles';

const BookCard = ({ title, author, cover }) => {
  return (
    <BookCardWrapper>
      <img src={cover} alt={title} />
      <h3>{title}</h3>
      <span>by {author}</span>
    </BookCardWrapper>
  );
};

BookCard.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired
};

export default BookCard;
