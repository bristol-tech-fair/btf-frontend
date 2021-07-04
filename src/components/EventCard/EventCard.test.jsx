import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import EventCard from './EventCard';

describe('EventCard', () => {
  test('renders EventCard component to check if description exists', () => {
    render(
      <BrowserRouter>
        <EventCard
          imgSrc="./assets/images/codingbug.png"
          date="13/5/2021"
          title="Coding Bug Event"
          desc="Lorem "
          url="www.bristoltechfair.com"
        />
      </BrowserRouter>
    );

    expect(screen.getByText('Lorem'));
  });
});
