import React from 'react';
import { render, screen } from '@testing-library/react';
import TextButton from './TextButton';

describe('TextButton', () => {
  test('renders TextButton component', () => {
    render(<TextButton content="Text button"/>);

    expect(screen.getByRole('button')).toHaveTextContent('Text button');
  });
});

