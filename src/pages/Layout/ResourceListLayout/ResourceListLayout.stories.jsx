import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Layout from './ResourceListLayout';

export default {
  title: 'Pages/ResLayout',
  component: Layout
};

export const ResourceListLayout = () => (
  <BrowserRouter>
    <Layout />
  </BrowserRouter>
);
