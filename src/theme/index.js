import React from 'react';
import Init from './init.styles';
import Palette from './palette.styles';
import Spacings from './spacings.styles';
import Typography from './typography.styles';
import InputWrapper from './inputs.styles';

const Theme = () => {
  return (
    <>
      <Init />
      <Palette />
      <Typography />
      <Spacings />
      <InputWrapper />
    </>
  );
};

export default Theme;
