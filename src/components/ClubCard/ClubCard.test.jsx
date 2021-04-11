import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import ClubCard from './ClubCard';

describe('ClubCard', () => {
  test('link works correctly', () => {
    render(
      <BrowserRouter>
        <ClubCard
          title="First title"
          coverUrl="./assets/images/book-of-making-cover.jpg"
          to="/test"
        />
      </BrowserRouter>
    );

    const link = screen.getByRole('link');
    expect(link.getAttribute('href')).toBe('/test');
    expect(screen.getByText('First title'));
  });
});
