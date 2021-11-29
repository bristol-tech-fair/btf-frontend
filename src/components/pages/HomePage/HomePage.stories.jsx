import React from 'react';
import HomePage from './HomePage';
import { resourceData, eventData, postData, sponsorData } from './sampleData';

export default {
  title: 'Pages/HomePage',
  component: HomePage
};

const Template = (args) => <HomePage {...args} />;

export const Default = Template.bind({});
Default.args = {
  readMoreUrl: '/about',
  resourceData,
  eventData,
  postData,
  sponsorData
};
