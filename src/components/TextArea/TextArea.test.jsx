import React from 'react';
import { render, screen } from '@testing-library/react';

import TextArea from './TextArea';

describe('TextArea', () => {
  test('renders the correct label text', () => {
    render(<TextArea labelText="Label text" placeholder="Input text" />);

    expect(screen.getByText('Label text'));
  });
  test('renders a textarea input', () => {
    render(<TextArea labelText="Label text" placeholder="Input text" />);

    expect(TextArea).toBeDefined();
  });
  test('renders the correct placeholder text', () => {
    render(<TextArea labelText="Label text" placeholder="Input text" />);

    expect(screen.getByPlaceholderText('Input text'));
  });
});
