import React from 'react';
import { render, screen } from '@testing-library/react';

import StandingRobot from './Robot';

describe('StandingRobot', () => {
  test('renders StandingRobot component', () => {
    render(<StandingRobot />);

    screen.debug();
  });
});
