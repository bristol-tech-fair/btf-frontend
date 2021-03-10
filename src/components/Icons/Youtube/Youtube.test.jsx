import React from 'react';
import { render, screen } from '@testing-library/react';

import Youtube from './Youtube';

describe('Youtube', () => {
  test('renders Youtube component', () => {
    render(<Youtube />);

    screen.debug();
  });
});
