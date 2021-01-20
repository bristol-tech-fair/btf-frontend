import React from 'react';
import { render, screen } from '@testing-library/react';

import Robot from './Robot';

describe('Robot', () => {
  test('renders Robot component', () => {
    render(<Robot path="" />);

    // expect(screen.getByText('Hello'));
    screen.debug();
  });
});
