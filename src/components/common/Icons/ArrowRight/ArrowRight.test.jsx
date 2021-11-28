import React from 'react';
import { render, screen } from '@testing-library/react';

import ArrowRight from './ArrowRight';

describe('ArrowRight', () => {
  test('renders ArrowRight component', () => {
    render(<ArrowRight />);

    screen.debug();
  });
});
