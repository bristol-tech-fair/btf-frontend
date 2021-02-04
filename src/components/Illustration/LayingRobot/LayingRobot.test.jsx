import React from 'react';
import { render, screen } from '@testing-library/react';

import LayingRobot from './LayingRobot';

describe('LayingRobot', () => {
  test('renders LayingRobot component', () => {
    render(<LayingRobot />);

    screen.debug();
  });
});
