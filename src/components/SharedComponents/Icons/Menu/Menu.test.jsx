import React from 'react';
import { render, screen } from '@testing-library/react';

import Menu from './Menu';

describe('Menu', () => {
  test('renders Menu component', () => {
    render(<Menu />);

    screen.debug();
  });
});
