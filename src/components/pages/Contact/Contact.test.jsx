import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Contact from './Contact';

describe('Contact', () => {
  test('renders Contact component', () => {
    render(<Contact value="Hello" />, { wrapper: MemoryRouter });

    expect(screen.getByText('Hello'));
  });
});
