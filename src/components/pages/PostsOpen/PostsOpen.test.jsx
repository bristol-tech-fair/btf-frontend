import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import PostsOpen from './PostsOpen';

describe('PostsOpen', () => {
  test('renders PostsOpen component', () => {
    render(<PostsOpen value="Hello" />, { wrapper: MemoryRouter });

    expect(screen.getByText('Hello'));
  });
});
