import React from 'react';
import { render, screen } from '@testing-library/react';

import Large from './Large';

describe('Large', () => {
  test('renders Large component', () => {
    render(<Large color="midblue" />);

    screen.debug();
  });
});
