import React from 'react';
import { render, screen } from '@testing-library/react';

import ResourceCard from './ResourceCard';

describe('ResourceCard', () => {
  test('renders ResourceCard component', () => {
    render(<ResourceCard title="Testing title" ageMin="6" ageMax="18" />);

    screen.debug();
  });
});
