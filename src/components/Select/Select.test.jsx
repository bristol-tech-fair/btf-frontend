import React from 'react';
import { render, screen } from '@testing-library/react';

import Select from './Select';

describe('Select', () => {
  test('renders Select component', () => {
    render(<Select value="Hello" />);

    expect(screen.getByText('Hello'));
  });
});
