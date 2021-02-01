import React from 'react';
import { render, screen } from '@testing-library/react';

import Cross from './Cross';

describe('Cross', () => {
  test('renders Cross component', () => {
    render(<Cross />);

    screen.debug();
  });
});
