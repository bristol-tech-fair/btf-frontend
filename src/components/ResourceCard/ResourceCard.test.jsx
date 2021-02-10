import React from 'react';
import { render, screen } from '@testing-library/react';

import ResourceCard from './ResourceCard';

describe('ResourceCard', () => {
  test('renders ResourceCard component', () => {
    render(<ResourceCard value="Hello" />);

    expect(screen.getByText('Hello'));
  });
});
