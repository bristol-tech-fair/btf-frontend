import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NavLink from './NavLink';

describe('NavLink', () => {
  test('renders NavLink component', () => {
    render(
      <BrowserRouter>
        <NavLink value="Test" path="/" />
      </BrowserRouter>
    );

    expect(screen.getByText('Test'));
  });
});
