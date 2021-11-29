import React from 'react';
import PostCard from './PostCard';

export default {
  title: 'Molecules/PostCard',
  component: PostCard
};

const Template = (args) => <PostCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  postLink: '/',
  title: 'If you love data come and speak to KETL',
  coverUrl: './assets/images/background.png',
  category: 'EVENT',
  date: '09/02/2011',
  shareLink: '/',
  bookmark: '/'
};
