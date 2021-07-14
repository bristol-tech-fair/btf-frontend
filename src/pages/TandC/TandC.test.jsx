import React from 'react';
import { render, screen } from '@testing-library/react';

import TandC from './TandC';

describe('TandC', () => {
  test('renders TandC component', () => {
    render(<TandC value="Hello" />);

    expect(screen.getByText('Hello'));
  });
});
