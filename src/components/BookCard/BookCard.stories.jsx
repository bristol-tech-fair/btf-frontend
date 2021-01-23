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
    cover="https://images.ctfassets.net/mu8m5cabjuvl/4cVpVyakl6rf73Y9nTZPv/7ced6b18c56bfb903de80b193892e27f/Book-of-Making-Volume01-COVER-landscape.jpg?w=800"
  />
);
