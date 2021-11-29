import React from 'react';
import { render, screen } from '@testing-library/react';

import List from './List';

const data = [
  {
    coverUrl: 'https://via.placeholder.com/240x140',
    title: 'Codingbug',
    to: '/'
  },
  {
    coverUrl: 'https://via.placeholder.com/240x140',
    title: 'Code Club',
    to: '/'
  }
];

describe('List', () => {
  test('renders List component with items passed correctly', () => {
    const { getByRole } = render(<List data={data} Component="ClubCard" />);
    const ul = getByRole('list');
    screen.debug();
    expect(ul.children.length).toEqual(2);
  });
});
