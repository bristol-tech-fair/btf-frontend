import React from 'react';
import PropTypes from 'prop-types';
import { BookCardWrapper } from './BookCard.styles';

const BookCard = ({ title, author, coverUrl }) => {
  return (
    <BookCardWrapper>
      <img src={coverUrl} alt={title} />
      <h3>{title}</h3>
      <span>by {author}</span>
    </BookCardWrapper>
  );
};

BookCard.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  coverUrl: PropTypes.string.isRequired
};

export default BookCard;
