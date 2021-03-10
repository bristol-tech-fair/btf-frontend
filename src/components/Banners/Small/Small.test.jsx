import React from 'react';
import { render, screen } from '@testing-library/react';

import Small from './Small';

describe('Small', () => {
  test('renders Small component', () => {
    render(<Small />);

    screen.debug();
  });
});
