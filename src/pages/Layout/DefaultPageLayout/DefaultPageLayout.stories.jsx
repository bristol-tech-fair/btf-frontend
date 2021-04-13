import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './DefaultPageLayout';

export default {
  title: 'Components/Layout',
  component: Layout
};

export const DefaultPageLayout = () => (
  <Router>
    <Layout />
  </Router>
);
