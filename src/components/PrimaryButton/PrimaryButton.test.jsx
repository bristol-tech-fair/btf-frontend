import React from 'react';
import { render, screen } from '@testing-library/react';

import PrimaryButton from './PrimaryButton';

describe('PrimaryButton', () => {
  test('renders PrimaryButton component', () => {
    render(<PrimaryButton value="Hello" />);

    expect(screen.getByText('Hello'));
  });
});
