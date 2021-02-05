import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './Header';

export default {
  title: 'Components/Header',
  component: Header
};

export const HeaderExample = () => (
  <BrowserRouter>
    <Header />
  </BrowserRouter>
);
