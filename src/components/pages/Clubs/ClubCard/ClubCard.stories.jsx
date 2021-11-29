import React from 'react';
import ClubCard from './ClubCard';

export default {
  title: 'Molecules/ClubCard',
  component: ClubCard
};

export const ClubCardTesting = () => (
  <ClubCard
    to="/"
    title="This is the title taking over three lines."
    coverUrl="./assets/images/codingbug.png"
  />
);
