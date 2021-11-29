import React from 'react';
import { render, screen } from '@testing-library/react';

import ArrowLeft from './ArrowLeft';

describe('ArrowLeft', () => {
  test('renders ArrowLeft component', () => {
    render(<ArrowLeft />);

    screen.debug();
  });
});
