import React from 'react';
import { render, screen } from '@testing-library/react';

import HomePage from './HomePage';

describe('HomePage', () => {
  test('renders HomePage component', () => {
    render(<HomePage value="Hello" />);

    expect(screen.getByText('Hello'));
  });
});
