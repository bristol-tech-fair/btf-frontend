import React from 'react';
import { render, screen } from '@testing-library/react';

import Competitions from './Competitions';

describe('Competitions', () => {
  test('renders Competitions component', () => {
    render(<Competitions value="Hello" />);

    expect(screen.getByText('Hello'));
  });
});
