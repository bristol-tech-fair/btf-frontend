import React from 'react';
import { render, screen } from '@testing-library/react';

import ClubCard from './ClubCard';

describe('ClubCard', () => {
  test('renders ClubCard component', () => {
    render(<ClubCard value="Hello" />);

    expect(screen.getByText('Hello'));
  });
});
