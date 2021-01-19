import React from 'react';
import TextArea from './TextArea';

export default {
  title: 'Components/TextArea',
  component: TextArea
};

export const TextAreaDefaultView = () => (
  <TextArea
    id="textarea1"
    name="textarea"
    labelText="Label"
    placeholder="Input text"
    value="Input"
  />
);
