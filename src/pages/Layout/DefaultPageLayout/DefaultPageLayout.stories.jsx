import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Layout from './DefaultPageLayout';

export default {
  title: 'Components/Layout',
  component: Layout
};

export const DefaultPageLayout = () => (
  <BrowserRouter>
    <Layout />
  </BrowserRouter>
);
