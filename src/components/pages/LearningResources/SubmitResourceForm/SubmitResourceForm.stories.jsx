import React from 'react';
import SubmitResourceForm from './SubmitResourceForm';

export default {
  title: 'Organisms/SubmitResourceForm',
  component: SubmitResourceForm
};

const Template = (args) => <SubmitResourceForm {...args} />;

export const Default = Template.bind({});
Default.args = {
  selectAges: [
    { value: '8-11', label: '8-11' },
    { value: '12-15', label: '12-15' },
    { value: '16-18', label: '16-18' }
  ],
  selectCategory: [
    { value: 'maths', label: 'maths' },
    { value: 'coding', label: 'coding' },
    { value: 'engineering', label: 'engineering' }
  ]
};
