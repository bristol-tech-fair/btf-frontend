import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import EventCard from './EventCard';

export default {
  title: 'Components/EventCard',
  component: EventCard
};

export const ExampleEventCard = () => (
  <BrowserRouter>
    <EventCard
      imgSrc="./assets/images/codingbug.png"
      date="13/5/2021"
      title="Coding Bug Event"
      desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      url="www.bristoltechfair.com"
    />
  </BrowserRouter>
);
