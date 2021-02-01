import React from 'react';
import { render, screen } from '@testing-library/react';
import coverImg from './book-of-making-cover.jpg';

import BookCard from './BookCard';

describe('BookCard', () => {
  test('renders BookCard component', () => {
    render(
      <BookCard title="Book of Making" author="J. Doe" cover={coverImg} />
    );

    expect(screen.getByText('Book of Making'));
    expect(screen.getByText('by J. Doe'));
  });

  test('image renders correctly', () => {
    render(
      <BookCard title="Book of Making" author="J. Doe" cover={coverImg} />
    );

    const image = screen.getByAltText('Book of Making');
    expect(image.src).toContain('.jpg');
  });
});
