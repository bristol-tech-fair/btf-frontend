import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ClubsList from './ClubsList';

export default {
  title: 'Components/ClubsList',
  component: ClubsList
};

export const ResourceListClubsList = () => (
  <BrowserRouter>
    <ClubsList />
  </BrowserRouter>
);
