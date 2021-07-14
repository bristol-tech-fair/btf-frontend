import React from 'react';
import { render, screen } from '@testing-library/react';

import CookiePolicy from './CookiePolicy';

describe('CookiePolicy', () => {
  test('renders CookiePolicy component', () => {
    render(<CookiePolicy value="Hello" />);

    expect(screen.getByText('Hello'));
  });
});
