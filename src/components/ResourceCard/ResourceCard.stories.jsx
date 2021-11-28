import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ResourceCard from './ResourceCard';

export default {
  title: 'Molecules/ResourceCard',
  component: ResourceCard
};

export const CardTest = () => (
  <Router>
    <ResourceCard
      title="It is <h2> tag. Let see how it will scale with longer text."
      category="Electronics"
      ages="6-10"
      rating="4"
      color="midblue"
      to="/"
    />
  </Router>
);
