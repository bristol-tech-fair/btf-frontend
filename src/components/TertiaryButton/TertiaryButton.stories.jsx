import React from 'react';
import TertiaryButton from './TertiaryButton';

export default {
  title: 'Components/TertiaryButton',
  component: TertiaryButton
};

export const tertiaryButtonWithContent = () => (
  <TertiaryButton content="Tertiary Button" colour="not blue" />
);
