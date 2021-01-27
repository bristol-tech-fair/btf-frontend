import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import SecondaryButton from './SecondaryButton';

describe('SecondaryButton', () => {
  test('renders SecondaryButton component', () => {
    render(<SecondaryButton content="Hello" />);

    expect(screen.getByText('Hello'));
  });

  test('calls onClick prop when clicked', () => {
    const handleClick = jest.fn();

    render(<SecondaryButton content="Hello" onClick={handleClick} />);

    fireEvent.click(screen.getByRole('button'));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
