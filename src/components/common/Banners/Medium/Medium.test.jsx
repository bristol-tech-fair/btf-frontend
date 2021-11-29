import React from 'react';
import { render, screen } from '@testing-library/react';

import Medium from './Medium';

describe('Medium', () => {
  test('renders Medium component', () => {
    render(<Medium color="midblue" />);

    screen.debug();
  });
});
