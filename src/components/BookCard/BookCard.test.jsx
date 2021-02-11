import React from 'react';
import { render, screen } from '@testing-library/react';

import BookCard from './BookCard';
import { BrowserRouter as Router } from 'react-router-dom';

describe('BookCard', () => {
  test('renders BookCard component', () => {
    render(
      <Router>
        <BookCard
          title="Book of Making"
          author="J. Doe"
          coverUrl="./assets/images/book-of-making-cover.jpg"
          to="/"
        />
      </Router>
    );

    expect(screen.getByText('Book of Making'));
    expect(screen.getByText('by J. Doe'));
  });

  test('image renders correctly', () => {
    render(
      <Router>
        <BookCard
          title="Book of Making"
          author="J. Doe"
          coverUrl="./assets/images/book-of-making-cover.jpg"
          to="/"
        />
      </Router>
    );

    const image = screen.getByAltText('Book of Making');
    expect(image.src).toContain('.jpg');
  });

  test('link works correctly', () => {
    render(
      <Router>
        <BookCard
          title="Book of Making"
          author="J. Doe"
          coverUrl="./assets/images/book-of-making-cover.jpg"
          to="/test"
        />
      </Router>
    );

    const link = screen.getByRole('link');
    expect(link.getAttribute('href')).toBe('/test');
  });
});
