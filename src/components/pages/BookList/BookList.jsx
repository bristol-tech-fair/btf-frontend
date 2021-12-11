import React from 'react';
import DefaultPageLayout from 'components/common/Layout/DefaultPageLayout';
import Spinner from 'components/common/Spinner';
import List from 'components/common/Layout/List';
import { MainContainer, ListContainer, PageTitle } from './BookList.styles';
import BookCard from './BookCard/BookCard';

const BookList = () => {
  // TODO: Replace this temporary data with API call
  const books = [
    {
      to: '/',
      title: 'Book of Making',
      author: 'J. Doe',
      coverUrl: './assets/images/book-of-making-cover.jpg'
    },
    {
      to: '/',
      title: 'Book of Making',
      author: 'J. Doe',
      coverUrl: './assets/images/book-of-making-cover.jpg'
    },
    {
      to: '/',
      title: 'Book of Making',
      author: 'J. Doe',
      coverUrl: './assets/images/book-of-making-cover.jpg'
    },
    {
      to: '/',
      title: 'Book of Making',
      author: 'J. Doe',
      coverUrl: './assets/images/book-of-making-cover.jpg'
    },
    {
      to: '/',
      title: 'Book of Making',
      author: 'J. Doe',
      coverUrl: './assets/images/book-of-making-cover.jpg'
    }
  ];
  return (
    <DefaultPageLayout>
      <MainContainer>
        <PageTitle>Book List</PageTitle>
        <ListContainer>
          {books ? <List Component={BookCard} data={books} /> : <Spinner />}
        </ListContainer>
      </MainContainer>
    </DefaultPageLayout>
  );
};

export default BookList;
