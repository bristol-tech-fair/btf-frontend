import React from 'react';
import Navigation from './Navigation';

export default {
  title: 'Organisms/Navigation',
  component: Navigation
};

const Template = (args) => <Navigation {...args} />;

export const Default = Template.bind({});
Default.args = {};
