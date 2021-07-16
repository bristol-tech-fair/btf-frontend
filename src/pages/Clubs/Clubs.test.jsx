import React from 'react';
import { render, screen } from '@testing-library/react';

import Clubs from './Clubs';

describe('Clubs', () => {
  test('renders Clubs component', () => {
    render(<Clubs value="Hello" />);

    expect(screen.getByText('Hello'));
  });
});
