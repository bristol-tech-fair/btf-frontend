import React from 'react';
import TextInput from '../TextInput';

export default {
  title: 'Atoms/Input/TextInput',
  component: TextInput
};

const Template = (args) => <TextInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: 'textInput',
  name: 'textInput',
  label: 'Label',
  placeholder: 'Input'
};
