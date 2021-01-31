import React from 'react';
import { render, screen } from '@testing-library/react';

import Image from './Image';

describe('Image', () => {
  test('renders Image component', () => {
    render(<Image />);

    screen.debug();
  });
});
