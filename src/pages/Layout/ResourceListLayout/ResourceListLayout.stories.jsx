import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Layout from './ResourceListLayout';

export default {
  title: 'Components/Layout',
  component: Layout
};

export const SampleLayout = () => (
  <BrowserRouter>
    <Layout />
  </BrowserRouter>
);
