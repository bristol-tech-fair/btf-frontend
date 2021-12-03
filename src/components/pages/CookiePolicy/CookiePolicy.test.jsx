import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import CookiePolicy from './CookiePolicy';

describe('CookiePolicy', () => {
  test('renders CookiePolicy component', () => {
    render(<CookiePolicy value="Hello" />, { wrapper: MemoryRouter });

    expect(screen.getByText('Hello'));
  });
});
