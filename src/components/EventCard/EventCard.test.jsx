import React from 'react';
import { render, screen } from '@testing-library/react';

import EventCard from './EventCard';

describe('EventCard', () => {
  test('renders EventCard component', () => {
    render(<EventCard value="Hello" />);

    expect(screen.getByText('Hello'));
  });
});
