import React from 'react';
import LearningResources from './LearningResources';

export default {
  title: 'Pages/LearningResources',
  component: LearningResources
};

const Template = (args) => <LearningResources {...args} />;

export const Default = Template.bind({});
Default.args = {};
