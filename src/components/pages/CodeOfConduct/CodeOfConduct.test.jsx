import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import CodeOfConduct from './CodeOfConduct';

describe('CodeOfConduct', () => {
  test('renders CodeOfConduct component', () => {
    render(<CodeOfConduct value="Hello" />, { wrapper: MemoryRouter });

    expect(screen.getByText('Hello'));
  });
});
