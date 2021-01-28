import React from 'react';
import { render, screen } from '@testing-library/react';

import ArrowCircleLeft from './ArrowCircleLeft';

describe('ArrowCircleLeft', () => {
  test('renders Icons component', () => {
    render(<ArrowCircleLeft />);

    screen.debug();
  });
});
