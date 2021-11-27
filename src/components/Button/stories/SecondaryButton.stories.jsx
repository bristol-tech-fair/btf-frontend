import React from 'react';
import SecondaryButton from '../SecondaryButton';

export default {
  title: 'Atoms/Button/SecondaryButton',
  component: SecondaryButton
};

const Template = (args) => <SecondaryButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  content: 'Secondary button'
};
