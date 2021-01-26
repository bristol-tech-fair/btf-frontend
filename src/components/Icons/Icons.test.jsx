import React from 'react';
import { render, screen } from '@testing-library/react';

import Icons from './Icons';

describe('Icons', () => {
  test('renders Icons component', () => {
    render(<Icons icon="Menu" />);

    screen.debug();
  });
});
