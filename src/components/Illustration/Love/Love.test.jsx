import React from 'react';
import { render, screen } from '@testing-library/react';

import Love from './Love';

describe('Love', () => {
  test('renders Love component', () => {
    render(<Love />);

    screen.debug();
  });
});
