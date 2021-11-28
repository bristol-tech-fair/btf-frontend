import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import NavLink from './NavLink';

describe('NavLink', () => {
  test('renders NavLink component', () => {
    render(
      <BrowserRouter>
        <NavLink content="Test" path="/" />
      </BrowserRouter>
    );

    expect(screen.getByText('Test'));
  });

  test('renders NavLink link properly', () => {
    render(
      <BrowserRouter>
        <NavLink content="Test" path="/" />
      </BrowserRouter>
    );

    const link = screen.getByRole('link');
    expect(link.getAttribute('href')).toBe('/');
  });
});
