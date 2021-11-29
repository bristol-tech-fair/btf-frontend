import React from 'react';
import NavLink from './NavLink';

export default {
  title: 'Atoms/NavLink',
  component: NavLink
};

const Template = (args) => <NavLink {...args} />;

export const Default = Template.bind({});
Default.args = {
  content: 'Navigation link',
  path: '/'
};
