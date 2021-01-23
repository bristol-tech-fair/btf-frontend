import React from 'react';
import { render, screen } from '@testing-library/react';

import BookCard from './BookCard';

describe('BookCard', () => {
  test('renders BookCard component', () => {
    render(<BookCard value="Hello" />);

    expect(screen.getByText('Hello'));
  });
});
