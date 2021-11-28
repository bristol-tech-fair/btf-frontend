import React from 'react';
import { render, screen } from '@testing-library/react';

import CodeOfConduct from './CodeOfConduct';

describe('CodeOfConduct', () => {
  test('renders CodeOfConduct component', () => {
    render(<CodeOfConduct value="Hello" />);

    expect(screen.getByText('Hello'));
  });
});
