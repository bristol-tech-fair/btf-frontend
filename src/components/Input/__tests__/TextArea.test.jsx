import React, { useState } from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TextArea from './TextArea';

const MockInput = () => {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <TextArea
      name="test"
      id="test"
      value={value}
      label="Label"
      onChange={handleChange}
    />
  );
};

const setup = () => {
  const utils = render(<MockInput />);
  const input = utils.getByLabelText('Label');
  return {
    input,
    ...utils
  };
};

test('It should change value when new input received', () => {
  const { input } = setup();
  fireEvent.change(input, { target: { value: 'Hello!' } });
  expect(input.value).toBe('Hello!');
});
