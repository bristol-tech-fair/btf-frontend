import React from 'react';
import { render, screen } from '@testing-library/react';

import SponsorCard from './SponsorCard';

describe('SponsorCard', () => {
  test('renders SponsorCard component', () => {
    render(<SponsorCard value="Hello" />);

    expect(screen.getByText('Hello'));
  });
});
