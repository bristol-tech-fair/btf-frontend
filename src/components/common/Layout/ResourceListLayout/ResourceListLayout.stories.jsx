import React from 'react';
import ResourceListLayout from './ResourceListLayout';

export default {
  title: 'Templates/ResourceListLayout',
  component: ResourceListLayout
};

const Template = (args) => <ResourceListLayout {...args} />;

export const Default = Template.bind({});
Default.args = {};
