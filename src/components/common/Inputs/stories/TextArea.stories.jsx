import React from 'react';
import TextArea from '../TextArea';

export default {
  title: 'Atoms/Input/TextArea',
  component: TextArea
};

const Template = (args) => <TextArea {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: 'textarea1',
  name: 'textarea',
  label: 'Label',
  placeholder: 'Input text'
};

export const MultilineText = Template.bind({});
MultilineText.args = {
  id: 'textarea1',
  name: 'textarea',
  label: 'Label',
  placeholder: 'Input text',
  value: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet orci luctus nisi sodales tempor quis ac augue. Phasellus nec sagittis est, ut fermentum enim. Quisque et ante eleifend nunc venenatis tincidunt. Suspendisse mollis ex egestas, varius felis eget, fringilla massa. Etiam vulputate pulvinar euismod. Donec finibus mi quis quam iaculis cursus. Nunc egestas quam non tortor faucibus rutrum. Nullam nec ligula congue, venenatis urna id, hendrerit erat. Suspendisse et dolor vestibulum, consequat justo non, blandit diam. Sed egestas in est sed molestie. Ut eu dapibus massa. Proin sit amet mi ornare, dapibus tortor vitae, convallis turpis. Duis in lorem sed velit scelerisque tempus nec eget nulla.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet orci luctus nisi sodales tempor quis ac augue. Phasellus nec sagittis est, ut fermentum enim. Quisque et ante eleifend nunc venenatis tincidunt. Suspendisse mollis ex egestas, varius felis eget, fringilla massa. Etiam vulputate pulvinar euismod. Donec finibus mi quis quam iaculis cursus. Nunc egestas quam non tortor faucibus rutrum. Nullam nec ligula congue, venenatis urna id, hendrerit erat. Suspendisse et dolor vestibulum, consequat justo non, blandit diam. Sed egestas in est sed molestie. Ut eu dapibus massa. Proin sit amet mi ornare, dapibus tortor vitae, convallis turpis. Duis in lorem sed velit scelerisque tempus nec eget nulla.`
};
