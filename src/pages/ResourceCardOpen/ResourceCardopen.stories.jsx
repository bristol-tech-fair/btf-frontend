import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ResourceCardOpen from './ResourceCardOpen';

export default {
  title: 'Components/Pages/ResourceCardOpen',
  component: ResourceCardOpen
};

export const ResourceCardOpenTest = () => (
  <BrowserRouter>
    <ResourceCardOpen />
  </BrowserRouter>
);
