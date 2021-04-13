import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import BooksList from './BooksList';

export default {
  title: 'Components/Pages/BooksList',
  component: BooksList
};

export const BooksListTest = () => (
  <BrowserRouter>
    <BooksList />
  </BrowserRouter>
);
