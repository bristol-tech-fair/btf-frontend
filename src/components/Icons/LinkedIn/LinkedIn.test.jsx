import React from 'react';
import { render, screen } from '@testing-library/react';

import LinkedIn from './LinkedIn';

describe('LinkedIn', () => {
  test('renders LinkedIn component', () => {
    render(<LinkedIn />);

    screen.debug();
  });
});
