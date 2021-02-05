import React from 'react';
import { render, screen } from '@testing-library/react';

import IllustrationLove from './IllustrationLove';

describe('IllustrationLove', () => {
  test('renders IllustrationLove component', () => {
    render(<IllustrationLove value="Hello" />);

    expect(screen.getByText('Hello'));
  });
});
