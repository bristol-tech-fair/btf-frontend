import React from 'react';
import ResourceCard from './ResourceCard';

export default {
  title: 'Molecules/ResourceCard',
  component: ResourceCard
};

const Template = (args) => <ResourceCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'It is <h2> tag. Let see how it will scale with longer text.',
  category: 'Electronics',
  ages: '6-10',
  rating: '4',
  color: 'midblue',
  to: '/'
};
