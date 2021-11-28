import React from 'react';
import { render, screen } from '@testing-library/react';

import Clock from './Clock';

describe('Clock', () => {
  test('renders Clock component', () => {
    render(<Clock />);

    screen.debug();
  });
});
