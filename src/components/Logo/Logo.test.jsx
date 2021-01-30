import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Logo from './Logo';

describe('Logo', () => {
  test('renders Logo component with red color prop', () => {
    const { container } = render(<Logo color="red" />);

    expect(container.firstChild).toHaveStyle(`width:18.8rem`);
  });

  test('renders Logo component with given width', () => {
    const { container } = render(<Logo color="blue" />);

    expect(container.firstChild).toHaveStyle(`width:18.8rem`);
  });
});
