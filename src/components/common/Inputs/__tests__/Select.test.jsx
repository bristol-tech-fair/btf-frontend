import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Select from '../Select';

const option = [
  { value: 'a', label: 'b' },
  { value: 'c', label: 'd' },
  { value: 'e', label: 'f' }
];

test('Label correctly associated with select component by screen reader', () => {
  render(
    <Select
      id="one"
      name="test name"
      label="test label"
      value="test default value"
      placeholder="Select..."
      options={option}
      onBlur={() => {
        console.log('I am working!');
      }}
    />
  );

  fireEvent.blur(screen.getByText('test label'));
});
