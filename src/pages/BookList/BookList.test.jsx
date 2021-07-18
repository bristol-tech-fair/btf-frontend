import React from 'react';
import { render, screen } from '@testing-library/react';

import BookList from './BookList';

describe('BookList', () => {
  test('renders BookList component', () => {
    render(<BookList value="Hello" />);

    expect(screen.getByText('Hello'));
  });
});
