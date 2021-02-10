import React from 'react';
import { render, screen } from '@testing-library/react';

import Navigation from './Navigation';

describe('Navigation', () => {
  test('renders Navigation component', () => {
    render(<Navigation value="Hello" />);

    expect(screen.getByText('Hello'));
  });
});
