import React from 'react';
import Logo from './Logo';

export default {
  title: 'Components/Logo',
  component: Logo
};

export const DefaultLogo = () => <Logo />;
export const LogoWithWidthAndHeight = () => <Logo width={10} height={6} />;
