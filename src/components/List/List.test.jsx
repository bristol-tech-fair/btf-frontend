import React from 'react';
import { render, screen } from '@testing-library/react';

import List from './List';

describe('List', () => {
  test('renders List component', () => {
    render(<List title="Clubs" Component="ClubCard" />);

    expect(screen.getByText('Clubs'));
  });
});
