import React from 'react';
import { render, screen } from '@testing-library/react';

import ResourceCard from './ResourceCard';

describe('ResourceCard', () => {
  test('renders ResourceCard component', () => {
    render(
      <ResourceCard
        title="First title"
        category="maths"
        color="midblue"
        ages={[6, 16]}
      />
    );

    expect(screen.getByText('First title'));
    expect(screen.getByText('maths'));
    screen.debug();
  });
});
