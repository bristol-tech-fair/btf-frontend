import React from 'react';
import { render, screen } from '@testing-library/react';

import PostCard from './PostCard';

describe('PostCard', () => {
  test('renders PostCard component', () => {
    render(<PostCard value="Hello" />);

    expect(screen.getByText('Hello'));
  });
});
