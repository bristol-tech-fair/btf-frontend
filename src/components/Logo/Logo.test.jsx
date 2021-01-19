import React from 'react';
import { render } from '@testing-library/react';

import Logo from './Logo';

describe('Logo', () => {
  test('renders Logo component', () => {
    const { getByAltText } = render(<Logo color="red" />);

    expect(getByAltText('Bristol Tech Fair Logo')).toBeTruthy();
  });
});
