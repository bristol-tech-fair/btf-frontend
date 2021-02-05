import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import NavLink from './NavLink';

export default {
  title: 'Components/NavLink',
  component: NavLink
};

export const Link = () => (
  <BrowserRouter>
    <NavLink value="Hello world!" path="/" />
  </BrowserRouter>
);
