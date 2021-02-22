import React from 'react';
import ResourceCard from './ResourceCard';

export default {
  title: 'Components/ResourceCard',
  component: ResourceCard
};

export const CardTest = () => (
  <ResourceCard
    title="First title"
    category="maths"
    ageMin="6"
    ageMax="18"
    rating="2"
    pattern="SmallOrange"
  />
);
