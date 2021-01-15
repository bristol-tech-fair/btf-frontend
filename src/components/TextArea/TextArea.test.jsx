import React from 'react';
import { render, screen } from '@testing-library/react';

import TextArea from './TextArea';

describe('TextArea', () => {
  test('renders TextArea component', () => {
    render(<TextArea value="Hello" />);

    expect(screen.getByText('Hello'));
  });
});
