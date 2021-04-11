import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './Layout';

export default {
  title: 'Components/Layout',
  component: Layout
};

export const SampleLayout = () => (
  <Router>
    <Layout />
  </Router>
);
