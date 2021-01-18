import React from 'react';
import { render, screen } from '@testing-library/react';

import Icons from './Icons';

describe('Icons', () => {
  test('renders Icons component', () => {
    render(<Icons value="Hello" />);

    expect(screen.getByText('Hello'));
  });
});
