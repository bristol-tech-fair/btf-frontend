import React from 'react';
import PrimaryButton from './PrimaryButton';

export default {
  title: 'Components/PrimaryButton',
  component: PrimaryButton
};

export const PrimaryButtonWithContent = () => {
  return <PrimaryButton content="Click Me!" />;
};

export const PrimarySubmitButtonWithContent = () => {
  return <PrimaryButton content="Submit" type="submit" />;
};
