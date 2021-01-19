import React from 'react';
import { render, screen } from '@testing-library/react';

import Robot from './Robot';

describe('Robot', () => {
  test('renders Robot component', () => {
    render(<Robot value="Hello" />);

    expect(screen.getByText('Hello'));
  });
});
