import React from 'react';
import TertiaryButton from '../TertiaryButton';

export default {
  title: 'Atoms/Button/TertiaryButton',
  component: TertiaryButton
};

const Template = (args) => <TertiaryButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  content: 'Tertiary button'
};
