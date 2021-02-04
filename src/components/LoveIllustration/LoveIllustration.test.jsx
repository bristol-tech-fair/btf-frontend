import React from 'react';
import { render, screen } from '@testing-library/react';

import LoveIllustration from './LoveIllustration';

describe('LoveIllustration', () => {
  test('renders LoveIllustration component', () => {
    render(<LoveIllustration />);

    screen.debug();
  });
});
