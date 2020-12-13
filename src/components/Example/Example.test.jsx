import React from 'react';
import { render, screen } from '@testing-library/react';

import Example from './Example';

describe('Example', () => {
  test('renders Example component', () => {
    render(<Example value="Hello" />);

    expect(screen.getByText('Hello'));
  });
});
