import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import List from './List';
import ClubCard from '../ClubCard';

export default {
  title: 'Components/List',
  component: List
};

export const ClubCardList = () => (
  <List title="Clubs">
    <Router>
      <ClubCard
        title="Codingbug"
        to="/"
        imgUrl="https://via.placeholder.com/240x140"
      />
    </Router>
  </List>
);
