import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Posts from './Posts';

describe('Posts', () => {
  test('renders Posts component', () => {
    render(<Posts value="Hello" />, { wrapper: MemoryRouter });

    expect(screen.getByText('Hello'));
  });
});
