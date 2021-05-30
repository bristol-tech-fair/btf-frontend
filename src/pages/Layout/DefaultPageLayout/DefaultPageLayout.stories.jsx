import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Layout from './DefaultPageLayout';

export default {
  title: 'Components/Pages/DefLayout',
  component: Layout
};

export const DefaultPageLayout = () => (
  <BrowserRouter>
    <Layout />
  </BrowserRouter>
);
