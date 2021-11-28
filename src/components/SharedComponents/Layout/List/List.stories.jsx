import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import List from './List';
import ClubCard from '../../../Clubs/ClubCard';

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

export const ClubCardList = () => (
  <Router>
    <List Component={ClubCard} _id="1" data={data} />
  </Router>
);
