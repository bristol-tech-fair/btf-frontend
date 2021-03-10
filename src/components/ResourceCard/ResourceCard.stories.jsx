import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ResourceCard from './ResourceCard';

export default {
  title: 'Components/ResourceCard',
  component: ResourceCard
};

export const CardTest = () => (
  <Router>
    <ResourceCard
      title="Title first line, second line, third line."
      category="Electronics"
      ages={[6, 18]}
      rating="3"
      color="midblue"
      to="/"
    />
  </Router>
);
