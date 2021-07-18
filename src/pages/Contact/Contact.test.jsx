import React from 'react';
import { render, screen } from '@testing-library/react';

import Contact from './Contact';

describe('Contact', () => {
  test('renders Contact component', () => {
    render(<Contact value="Hello" />);

    expect(screen.getByText('Hello'));
  });
});
