import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navigation from './Navigation';

export default {
  title: 'Organisms/Navigation',
  component: Navigation
};

export const Header = () => (
  <BrowserRouter>
    <Navigation />
  </BrowserRouter>
);
