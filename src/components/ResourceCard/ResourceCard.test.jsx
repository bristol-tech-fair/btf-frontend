import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import ResourceCard from './ResourceCard';

describe('ResourceCard', () => {
  test('renders ResourceCard component and does it work as a link', () => {
    render(
      <Router>
        <ResourceCard
          title="First title"
          category="maths"
          color="midblue"
          ages="6-11"
          to="/test"
        />
      </Router>
    );

    expect(screen.getByText('First title'));
    expect(screen.getByText('maths'));
    const link = screen.getByRole('link');
    expect(link.getAttribute('href')).toBe('/test');
    screen.debug();
  });
});
