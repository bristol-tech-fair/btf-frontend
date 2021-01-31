import React from 'react';
import { render, screen } from '@testing-library/react';

import Twitter from './Twitter';

describe('Twitter', () => {
  test('renders Twitter component', () => {
    render(<Twitter />);

    screen.debug();
  });
});
