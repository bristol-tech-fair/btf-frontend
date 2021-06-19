import React from 'react';
import { render, screen } from '@testing-library/react';

import SponsorCard from './SponsorCard';

describe('SponsorCard', () => {
  test('renders SponsorCard component', () => {
    render(
      <SponsorCard
        sponsorLogo="./assets/images/book-of-making-cover.jpg"
        sponsorName="WTH"
      />
    );

    const image = screen.getByAltText('WTH');
    expect(image.src).toContain('.jpg');
  });
});
