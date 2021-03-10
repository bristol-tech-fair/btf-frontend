import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Select from './Select';

test('Label correctly associated with select component by screenreader', () => {
  render(
    <Select
      name="test name"
      label="test label"
      value="test default value"
      options={[
        { optionValue: 'a', optionLabel: 'b' },
        { optionValue: 'c', optionLabel: 'd' },
        { optionValue: 'e', optionLabel: 'f' }
      ]}
      onBlur={() => {
        console.log('I am working!');
      }}
    />
  );

  fireEvent.blur(screen.getByLabelText('test label'));
});
