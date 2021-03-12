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
      title="It is <h2> tag. Should we use <h3> tag ??"
      category="Electronics"
      ages="6-10"
      rating="1"
      color="midblue"
      to="/"
    />
  </Router>
);
