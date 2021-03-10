import React from 'react';
import { render, screen } from '@testing-library/react';

import Heart from './Heart';

describe('Heart', () => {
  test('renders Heart component', () => {
    render(<Heart />);

    screen.debug();
  });
});
