import React from 'react';
import { render, screen } from '@testing-library/react';

import TertiaryButton from './TertiaryButton';

describe('TertiaryButton', () => {
  test('renders TertiaryButton component', () => {
    render(<TertiaryButton value="Tertiary Button" colour="blue" />);

    expect(screen.getByText('Tertiary Button'));
  });
});
