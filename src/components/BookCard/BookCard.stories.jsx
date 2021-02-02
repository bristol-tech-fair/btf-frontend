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
    coverUrl="./assets/images/book-of-making-cover.jpg"
  />
);
