import React from 'react';
import { render, screen } from '@testing-library/react';

import Posts from './Posts';

describe('Posts', () => {
  test('renders Posts component', () => {
    render(<Posts value="Hello" />);

    expect(screen.getByText('Hello'));
  });
});
