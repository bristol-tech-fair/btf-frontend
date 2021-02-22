import React from 'react';
import Card from './ResourceCard';

export default {
  title: 'Components/ResourceCard',
  component: Card
};

export const CardTest = () => (
  <Card
    title="First title"
    category="maths"
    ageMin={6}
    ageMax={18}
    rating={2}
    pattern="SmallOrange"
  />
);
