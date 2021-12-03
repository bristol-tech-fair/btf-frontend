import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Clubs from './Clubs';

describe('Clubs', () => {
  test('renders Clubs component', () => {
    render(<Clubs value="Hello" />, { wrapper: MemoryRouter });

    expect(screen.getByText('Hello'));
  });
});
