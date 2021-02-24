import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Select from './Select';

describe('Select', () => {
  test('renders Select component', () => {
    render(<Select value="Hello" />);

    expect(screen.getByText('Hello'));
  });

  test('onBlur prop called when clicking away from component', () => {
    const handleChange = jest.fn();

    render(
      <Select
        name="test name"
        label="test label"
        defaultValue="test default value"
        options={[
          { optionValue: 'a', optionLabel: 'b' },
          { optionValue: 'c', optionLabel: 'd' },
          { optionValue: 'e', optionLabel: 'f' }
        ]}
        onBlur={handleChange}
      />
    );

    fireEvent.blur(screen.getByRole('select'));

    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});
