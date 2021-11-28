import React from 'react';
import { render, screen } from '@testing-library/react';

import PostsOpen from './PostsOpen';

describe('PostsOpen', () => {
  test('renders PostsOpen component', () => {
    render(<PostsOpen value="Hello" />);

    expect(screen.getByText('Hello'));
  });
});
