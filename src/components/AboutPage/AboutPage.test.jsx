import React from 'react';
import { render, screen } from '@testing-library/react';

import AboutPage from './AboutPage';

describe('AboutPage', () => {
  test('renders AboutPage component', () => {
    render(<AboutPage value="Hello" />);

    expect(screen.getByText('Hello'));
  });
});
