import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TextButton from './TextButton';

describe('TextButton', () => {
  test('renders TextButton component', () => {
    render(<TextButton content="Text button" type="button" />);

    expect(screen.getByRole('button')).toHaveTextContent('Text button');
  });

  test('calls onclick prop when clicked', () => {
    const handleClick = jest.fn();
    render(
      <TextButton content="Text button" type="button" onClick={handleClick} />
    );
    fireEvent.click(screen.getByText('Text button'));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
