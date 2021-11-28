import React from 'react';
import { render, screen } from '@testing-library/react';

import File from './File';

describe('File', () => {
  test('renders File component', () => {
    render(<File />);

    screen.debug();
  });
});
