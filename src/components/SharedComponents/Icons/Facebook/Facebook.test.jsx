import React from 'react';
import { render, screen } from '@testing-library/react';

import Facebook from './Facebook';

describe('Facebook', () => {
  test('renders Facebook component', () => {
    render(<Facebook />);

    screen.debug();
  });
});
