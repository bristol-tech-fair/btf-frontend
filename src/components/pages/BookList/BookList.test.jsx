import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import BookList from './BookList';

describe('BookList', () => {
  test('renders BookList component', () => {
    render(<BookList value="Hello" />, { wrapper: MemoryRouter });

    expect(screen.getByText('Hello'));
  });
});
