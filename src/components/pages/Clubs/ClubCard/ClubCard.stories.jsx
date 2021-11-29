import React from 'react';
import ClubCard from './ClubCard';

export default {
  title: 'Molecules/ClubCard',
  component: ClubCard
};

const Template = (args) => <ClubCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  to: '/',
  title: 'This is the title taking over three lines.',
  coverUrl: './assets/images/codingbug.png'
};
