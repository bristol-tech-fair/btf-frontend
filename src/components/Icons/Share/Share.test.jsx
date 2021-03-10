import React from 'react';
import { render, screen } from '@testing-library/react';

import Share from './Share';

describe('Share', () => {
  test('renders Share component', () => {
    render(<Share />);

    screen.debug();
  });
});
