import React from 'react';
import PropTypes from 'prop-types';
import { BookCardWrapper } from './BookCard.styles';

const BookCard = ({ value }) => {
  return (
    <BookCardWrapper>
      <p>{value}</p>
    </BookCardWrapper>
  );
};

BookCard.propTypes = {
  value: PropTypes.string.isRequired
};

export default BookCard;
