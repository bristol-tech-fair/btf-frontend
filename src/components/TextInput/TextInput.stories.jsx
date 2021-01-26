import React from 'react';
import TextInput from './TextInput';

export default {
  title: 'Components/TextInput',
  component: TextInput
};

export const textInput = () => (
  <TextInput
    id="textinput"
    name="textinput"
    labelText="Label"
    placeholder="Input text"
    value="Input"
  />
);
