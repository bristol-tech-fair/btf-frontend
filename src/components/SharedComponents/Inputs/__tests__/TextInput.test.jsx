import React from 'react';
import { render, screen } from '@testing-library/react';

import TextInput from '../TextInput';

describe('TextInput', () => {
  test('renders TextInput component to check if placeholder text match', () => {
    render(
      <TextInput id="test" name="name" label="label" placeholder="Hello" />
    );

    expect(screen.getByPlaceholderText('Hello'));
  });
});
