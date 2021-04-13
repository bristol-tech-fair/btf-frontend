import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ClubsList from './ClubsList';

export default {
  title: 'Components/Pages/ClubsList',
  component: ClubsList
};

export const ClubsListTest = () => (
  <BrowserRouter>
    <ClubsList />
  </BrowserRouter>
);
