import React from 'react';
import TextButton from './TextButton';

export default {
  title: 'Components/TextButton',
  component: TextButton
};

export const TextButtonWithContent = () => (
  <TextButton content="Text button" type="button" />
);