import React from 'react';
import { render, screen } from '@testing-library/react';

import Orange from './Orange';

describe('Orange', () => {
  test('renders Orange component', () => {
    render(<Orange />);

    screen.debug();
  });
});
