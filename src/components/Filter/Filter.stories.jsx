import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Filter from './Filter';

export default {
  title: 'Components/Filter',
  component: Filter
};

export const TestFilter = () => (
  <BrowserRouter>
    <Filter />
  </BrowserRouter>
);
