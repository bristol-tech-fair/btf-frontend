import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

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
  test('calls onchange prop when text changed', () => {
    const handleChange = jest.fn();
    render(<TextArea labelText="Label text" placeholder="Input text" onChange={handleChange}/>);
    fireEvent.change(screen.getByRole('textarea'));

    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});
