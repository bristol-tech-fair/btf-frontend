import React from 'react';
import PropTypes from 'prop-types';
import { BookListWrapper } from './BookList.styles';

const BookList = ({ value }) => {
  return (
    <BookListWrapper>
      <p>{value}</p>
    </BookListWrapper>
  );
};

BookList.propTypes = {
  value: PropTypes.string.isRequired
};

export default BookList;
