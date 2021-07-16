import React from 'react';
import { render, screen } from '@testing-library/react';

import SupportGroups from './SupportGroups';

describe('SupportGroups', () => {
  test('renders SupportGroups component', () => {
    render(<SupportGroups value="Hello" />);

    expect(screen.getByText('Hello'));
  });
});
