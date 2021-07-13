import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import PostCard from './PostCard';

describe('PostCard', () => {
  test('renders PostCard component', () => {
    render(
      <Router>
        <PostCard
          postLink="/"
          title="If you love data come and speak to KETL"
          coverUrl="./assets/images/background.png"
          category="EVENT"
          date="09/02/2011"
          shareLink="/"
          bookmark="/"
        />
      </Router>
    );

    expect(screen.getByText('If you love data come and speak to KETL'));
  });

  test('PostCard image renders correctly', () => {
    render(
      <Router>
        <PostCard
          postLink="/"
          title="If you love data come and speak to KETL"
          coverUrl="./assets/images/background.png"
          category="EVENT"
          date="09/02/2011"
          shareLink="/"
          bookmark="/"
        />
      </Router>
    );

    const image = screen.getByAltText(
      'If you love data come and speak to KETL'
    );
    expect(image.src).toContain('.png');
  });

  test('Links in PostCard renders correctly', () => {
    render(
      <Router>
        <PostCard
          postLink="/"
          title="If you love data come and speak to KETL"
          coverUrl="./assets/images/background.png"
          category="EVENT"
          date="09/02/2011"
          shareLink="/share"
          bookmark="/bookmark"
        />
      </Router>
    );

    expect(screen.getAllByRole('link')).toHaveLength(3);
  });
});
