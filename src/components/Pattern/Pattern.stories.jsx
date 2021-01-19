import React from 'react';
import Pattern from './Pattern';

export default {
  title: 'Components/Pattern',
  component: Pattern
};

export const SmallPattern = () => <Pattern color="darkgrey" size="S" />;
export const MediumPattern = () => <Pattern color="orange" size="M" />;
export const LargePattern = () => <Pattern color="lightblue" size="L" />;

/*
  color: 'lightpink' || 'darkpink' || 'mattepink' || 'logopink' || 'lightgrey' || 'darkgrey' || 'darkburgundy' || 'orange' || 'lightblue' || 'midblue' || 'darkblue'
  size: 'L' || 'M' || 'S'
*/
