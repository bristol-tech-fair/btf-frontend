import React from 'react';
import Init from './init.styles';
import Palette from './palette.styles';
import Shadows from './shadows.styles';
import Spacings from './spacings.styles';
import Typography from './typography.styles';

const Theme = () => {
  return (
    <>
      <Init />
      <Palette />
      <Typography />
      <Spacings />
      <Shadows />
    </>
  );
};

export default Theme;
