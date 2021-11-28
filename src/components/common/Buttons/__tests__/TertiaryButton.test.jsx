import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import TertiaryButton from '../TertiaryButton';

describe('TertiaryButton', () => {
  test('renders TertiaryButton component', () => {
    render(<TertiaryButton content="Tertiary button" />);

    expect(screen.getByRole('button')).toHaveTextContent('Tertiary button');
  });

  test('renders button of type submit', () => {
    render(<TertiaryButton content="Tertiary button" type="submit" />);

    expect(screen.getByRole('button')).toHaveAttribute('type', 'submit');
  });

  test('calls onClick prop when clicked', () => {
    const handleClick = jest.fn();

    render(<TertiaryButton content="Tertiary button" onClick={handleClick} />);

    fireEvent.click(screen.getByRole('button'));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
