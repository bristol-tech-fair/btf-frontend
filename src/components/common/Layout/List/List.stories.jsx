import React from 'react';
import ClubCard from 'components/pages/Clubs/ClubCard';
import List from './List';

export default {
  title: 'Templates/List',
  component: List
};

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
  },
  {
    coverUrl: 'https://via.placeholder.com/240x140',
    title: 'Coder Dojo',
    to: '/'
  },
  {
    coverUrl: 'https://via.placeholder.com/240x140',
    title: 'Code Club',
    to: '/'
  }
];

const Template = (args) => <List {...args} />;

export const ClubCardList = Template.bind({});
ClubCardList.args = {
  Component: ClubCard,
  _id: '1',
  data
};
