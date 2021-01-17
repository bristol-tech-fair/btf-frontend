import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Pattern from './Pattern';

describe('Pattern', () => {
  test('renders Pattern component', () => {
    const { container } = render(<Pattern color="logopink" size="L" />);

    const svg = container.querySelector('svg');
    const paths = container.querySelectorAll('path');

    // expect(screen.getByText('Hello'));
    screen.debug();
    expect(svg).toHaveAttribute('width', '1377'); // S: 451 || M: 938 || L: 1377
    expect(paths[0].classList.contains('logopink')).toBe(true);
  });
});
