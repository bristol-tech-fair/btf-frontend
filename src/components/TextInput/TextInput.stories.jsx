import React from 'react';
import TextInput from './TextInput';

export default {
  title: 'Components/TextInput',
  component: TextInput
};

export const textInput = () => (
  <TextInput
    id="textInput"
    name="textInput"
    label="Label"
    placeholder="Input"
  />
);
