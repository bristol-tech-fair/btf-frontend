import React from 'react';
import { render, screen } from '@testing-library/react';

import Links from './Links';

describe('Link', () => {
  test('renders Link component', () => {
    render(<Links />);

    screen.debug();
  });
});
