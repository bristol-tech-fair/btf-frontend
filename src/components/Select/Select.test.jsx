import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Select from './Select';

const option = [
  { optionValue: 'a', optionLabel: 'b' },
  { optionValue: 'c', optionLabel: 'd' },
  { optionValue: 'e', optionLabel: 'f' }
];

test('Label correctly associated with select component by screenreader', () => {
  render(
    <Select
      id="one"
      name="test name"
      label="test label"
      value="test default value"
      placeholder="Select"
      options={option}
      onBlur={() => {
        console.log('I am working!');
      }}
    />
  );

  fireEvent.blur(screen.getByLabelText('test label'));
  screen.debug();
});
