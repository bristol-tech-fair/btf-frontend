import React from 'react';
import { render, screen } from '@testing-library/react';

import Message from './Message';

describe('Message', () => {
  test('renders Message component', () => {
    render(<Message />);

    screen.debug();
  });
});
