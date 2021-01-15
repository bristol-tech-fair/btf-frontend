import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import PrimaryButton from './PrimaryButton';

describe('PrimaryButton', () => {
  test('renders PrimaryButton component', () => {
    render(<PrimaryButton content="Primary button" />);

    expect(screen.getByRole('button')).toHaveTextContent('Primary button');
  });

  test('renders button of type submit', () => {
    render(<PrimaryButton content="Primary button" type="submit" />);

    expect(screen.getByRole('button')).toHaveAttribute('type', 'submit');
  });

  test('calls onClick prop when clicked', () => {
    const handleClick = jest.fn();

    render(<PrimaryButton content="Primary button" onClick={handleClick} />);

    fireEvent.click(screen.getByRole('button'));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
