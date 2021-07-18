import React from 'react';
import { render, screen } from '@testing-library/react';

import Events from './Events';

describe('Events', () => {
  test('renders Events component', () => {
    render(<Events value="Hello" />);

    expect(screen.getByText('Hello'));
  });
});
