import React from 'react';
import { render, screen } from '@testing-library/react';

import HeartFull from './HeartFull';

describe('HeartFull', () => {
  test('renders HeartFull component', () => {
    render(<HeartFull />);

    screen.debug();
  });
});
