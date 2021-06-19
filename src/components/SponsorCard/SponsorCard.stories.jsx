import React from 'react';
import SponsorCard from './SponsorCard';

export default {
  title: 'Components/SponsorCard',
  component: SponsorCard
};

export const SponsorCardTest = () => (
  <SponsorCard
    sponsorLogo="./assets/images/book-of-making-cover.jpg"
    sponsorName="WTH"
  />
);
