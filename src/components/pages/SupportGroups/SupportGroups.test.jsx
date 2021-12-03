import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import SupportGroups from './SupportGroups';

describe('SupportGroups', () => {
  test('renders SupportGroups component', () => {
    render(<SupportGroups value="Hello" />, { wrapper: MemoryRouter });

    expect(screen.getByText('Hello'));
  });
});
