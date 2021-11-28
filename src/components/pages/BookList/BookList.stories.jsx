import React from 'react';
import BookList from './BookList';

export default {
  title: 'Pages/BookList',
  component: BookList
};

export const HelloWorld = () => <BookList value="Hello world!" />;
