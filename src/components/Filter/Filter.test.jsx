import React from 'react';
import { render, screen } from '@testing-library/react';

import Filter from './Filter';

describe('Filter', () => {
  test('renders Filter component', () => {
    render(<Filter value="Hello" />);

    expect(screen.getByText('Hello'));
  });
});
