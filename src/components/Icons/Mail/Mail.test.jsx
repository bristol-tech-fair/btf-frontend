import React from 'react';
import { render, screen } from '@testing-library/react';

import Mail from './Mail';

describe('Mail', () => {
  test('renders Mail component', () => {
    render(<Mail />);

    screen.debug();
  });
});
