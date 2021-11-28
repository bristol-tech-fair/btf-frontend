import React from 'react';
import { render, screen } from '@testing-library/react';

import ArrowCircleRight from './ArrowCircleRight';

describe('ArrowCircleRight', () => {
  test('renders ArrowCircleRight component', () => {
    render(<ArrowCircleRight />);

    screen.debug();
  });
});
