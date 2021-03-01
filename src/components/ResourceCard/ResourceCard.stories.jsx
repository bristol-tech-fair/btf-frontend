import React from 'react';
import ResourceCard from './ResourceCard';

export default {
  title: 'Components/ResourceCard',
  component: ResourceCard
};

export const CardTest = () => (
  <ResourceCard
    title="Title first line, second line, third line."
    category="Electronics"
    ages={['6', '16']}
    rating="2"
    color="lightblue"
  />
);
