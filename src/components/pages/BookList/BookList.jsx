import React from 'react';
import PropTypes from 'prop-types';
import DefaultPageLayout from 'components/common/Layout/DefaultPageLayout';
import { BookListWrapper } from './BookList.styles';

const BookList = ({ value }) => {
  return (
    <DefaultPageLayout>
      <BookListWrapper>
        <p>{value}</p>
        <h1>This is the Books page. It is here to check the Router</h1>
      </BookListWrapper>
    </DefaultPageLayout>
  );
};

BookList.propTypes = {
  value: PropTypes.string.isRequired
};

export default BookList;
