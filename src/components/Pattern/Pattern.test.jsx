import React from 'react';
import { render, screen } from '@testing-library/react';

import Pattern from './Pattern';

describe('Pattern', () => {
  test('renders Pattern component', () => {
    render(<Pattern value="Hello" />);

    expect(screen.getByText('Hello'));
  });
});
