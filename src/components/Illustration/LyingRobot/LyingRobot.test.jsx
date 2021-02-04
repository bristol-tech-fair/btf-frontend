import React from 'react';
import { render, screen } from '@testing-library/react';

import LyingRobot from './LyingRobot';

describe('LayingRobot', () => {
  test('renders LyingRobot component', () => {
    render(<LyingRobot />);

    screen.debug();
  });
});
