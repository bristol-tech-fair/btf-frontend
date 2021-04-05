import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ClubCard from './ClubCard';

export default {
  title: 'Components/ClubCard',
  component: ClubCard
};

export const HelloWorld = () => (
  <BrowserRouter>
    <ClubCard
      to="/"
      title="This is the title taking over three lines."
      coverUrl="./assets/images/codingbug.png"
    />
  </BrowserRouter>
);
