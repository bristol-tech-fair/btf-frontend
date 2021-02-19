import React from 'react';
import { render, screen } from '@testing-library/react';

import NavLink from './NavLink';

describe('NavLink', () => {
  test('renders NavLink component', () => {
    render(<NavLink value="Hello" />);

    expect(screen.getByText('Hello'));
  });
});
