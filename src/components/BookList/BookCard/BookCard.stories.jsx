import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import BookCard from './BookCard';

export default {
  title: 'Molecules/BookCard',
  component: BookCard
};

export const SampleBookCard = () => (
  <Router>
    <BookCard
      to="/"
      title="Book of Making"
      author="J. Doe"
      coverUrl="./assets/images/book-of-making-cover.jpg"
    />
  </Router>
);
