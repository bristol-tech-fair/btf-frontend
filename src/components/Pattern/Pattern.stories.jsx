import React from 'react';
import Pattern from './Pattern';

export default {
  title: 'Components/Pattern',
  component: Pattern
};

export const SmallPattern = () => <Pattern color="midblue" size="s" />;
export const MediumPattern = () => <Pattern color="logopink" size="M" />;
export const LargePattern = () => <Pattern color="orange" size="l" />;

/*
  color: 'lightpink' || 'darkpink' || 'mattepink' || 'logopink' || 'lightgrey' || 'darkgrey' || 'darkburgundy' || 'orange' || 'lightblue' || 'midblue' || 'darkblue'
  size: 'L' || 'M' || 'S'
*/
