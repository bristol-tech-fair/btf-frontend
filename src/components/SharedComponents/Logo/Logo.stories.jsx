import React from 'react';
import Logo from './Logo';

export default {
  title: 'Atoms/Logo',
  component: Logo
};

export const RedLogo = () => <Logo color="red" />;
export const BlueLogo = () => <Logo color="blue" />;
