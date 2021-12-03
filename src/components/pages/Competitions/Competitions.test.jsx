import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Competitions from './Competitions';

describe('Competitions', () => {
  test('renders Competitions component', () => {
    render(<Competitions value="Hello" />, { wrapper: MemoryRouter });

    expect(screen.getByText('Hello'));
  });
});
