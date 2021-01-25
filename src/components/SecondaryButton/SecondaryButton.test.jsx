import React from 'react';
import { render, screen } from '@testing-library/react';

import SecondaryButton from './SecondaryButton';

describe('SecondaryButton', () => {
  test('renders SecondaryButton component', () => {
    render(<SecondaryButton value="Hello" />);

    expect(screen.getByText('Hello'));
  });
});
