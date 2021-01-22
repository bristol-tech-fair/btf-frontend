import React from 'react';
import { render } from '@testing-library/react';
import { toHaveStyle } from '@testing-library/jest-dom';

import Logo from './Logo';

describe('Logo', () => {
  test('renders Logo component with default width', () => {
    const { container } = render(<Logo />);

    expect(container.firstChild).toHaveStyle(`width:18.8rem`);
  });

  test('renders Logo component with given width', () => {
    const { container } = render(<Logo width={10} />);

    expect(container.firstChild).toHaveStyle(`width:10rem`);
  });
});
