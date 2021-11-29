import React from 'react';
import DefaultPageLayout from './DefaultPageLayout';

export default {
  title: 'Templates/DefaultPageLayout',
  component: DefaultPageLayout
};

const Template = (args) => <DefaultPageLayout {...args} />;

export const Default = Template.bind({});
Default.args = {};
