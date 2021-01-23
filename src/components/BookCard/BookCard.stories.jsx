import React from 'react';
import BookCard from './BookCard';

export default {
  title: 'Components/BookCard',
  component: BookCard
};

export const SampleBookCard = () => (
  <BookCard
    title="Book of Making"
    author="J. Doe"
    cover="https://images-na.ssl-images-amazon.com/images/I/51P6nn6+FyL._SX258_BO1,204,203,200_.jpg"
  />
);
