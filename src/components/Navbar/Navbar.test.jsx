import React from 'react';
import { render, screen } from '@testing-library/react';

import Navbar from './Navbar';

describe('Navbar', () => {
  test('renders Navbar component', () => {
    render(
      <Navbar>
        <p>test</p>
      </Navbar>
    );

    expect(screen.getByText('test'));
  });
});
