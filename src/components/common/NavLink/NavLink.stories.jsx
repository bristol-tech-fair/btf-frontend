import React from 'react';
import NavLink from './NavLink';

export default {
  title: 'Atoms/NavLink',
  component: NavLink
};

export const NavLinkWithContent = () => {
  return <NavLink content="Navigation link" path="/" />;
};
