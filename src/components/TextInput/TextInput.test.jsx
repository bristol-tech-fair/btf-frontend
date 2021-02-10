import React from 'react';
import { render, screen } from '@testing-library/react';

import TextInput from './TextInput';

describe('TextInput', () => {
  test('renders TextInput component', () => {
    render(<TextInput value="Hello" />);

    expect(screen.getByText('Hello'));
  });
});
