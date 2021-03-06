import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import NavLink from './NavLink';

export default {
  title: 'Components/NavLink',
  component: NavLink
};

export const NavLinkWithContent = () => {
  return (
    <BrowserRouter>
      <NavLink content="Navigation link" path="/" />
    </BrowserRouter>
  );
};
