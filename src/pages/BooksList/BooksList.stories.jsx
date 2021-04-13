import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import BooksList from './BooksList';

export default {
  title: 'Components/BooksList',
  component: BooksList
};

export const ResourceListBooksList = () => (
  <BrowserRouter>
    <BooksList />
  </BrowserRouter>
);
