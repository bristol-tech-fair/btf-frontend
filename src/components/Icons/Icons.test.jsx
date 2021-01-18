import React from 'react';
import { render, screen } from '@testing-library/react';

import Icons from './Icons';

describe('Icons', () => {
  test('renders Icons component', () => {
    render(<Icons icon="M3 12H21 M3 6H21 M3 18H21" />);

    // expect(screen.getByText('Hello'));
    screen.debug();
  });
});
