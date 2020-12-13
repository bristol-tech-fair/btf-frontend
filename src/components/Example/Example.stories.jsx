import React from 'react';
import Example from './Example';

export default {
  title: 'Components/Example',
  component: Example
};

const Template = (args) => <Example {...args} />;

export const HelloWorld = Template.bind({});
HelloWorld.args = { value: 'Hello world!' };
