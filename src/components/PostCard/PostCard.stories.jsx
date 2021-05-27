import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import PostCard from './PostCard';

export default {
  title: 'Components/PostCard',
  component: PostCard
};

export const TestCard = () => (
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
