import React from 'react';
import { render, screen } from '@testing-library/react';

import Bookmark from './Bookmark';

describe('Bookmark', () => {
  test('renders Bookmark component', () => {
    render(<Bookmark />);

    screen.debug();
  });
});
