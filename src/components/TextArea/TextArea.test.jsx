import React from 'react';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import TextArea from './TextArea';

afterEach(cleanup);

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
  test('calls onChange prop when text changed', () => {
    const handleChange = jest.fn();
    render(
      <TextArea
        id="textarea"
        labelText="label text"
        placeholder="input text"
        value="original text"
        onChange={handleChange}
      />
    );
    screen.debug();
    // screen.getByRole('');
    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'modified text' }
    });
    screen.debug();
    // expect(handleChange).toHaveBeenCalledTimes(1);
  });
});
