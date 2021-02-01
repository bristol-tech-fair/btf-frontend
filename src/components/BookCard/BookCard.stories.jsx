import React from 'react';
import BookCard from './BookCard';
import coverImg from './book-of-making-cover.jpg';

export default {
  title: 'Components/BookCard',
  component: BookCard
};

export const SampleBookCard = () => (
  <BookCard title="Book of Making" author="J. Doe" cover={coverImg} />
);
