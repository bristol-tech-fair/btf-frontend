import React from 'react';
import Select from './Select';

export default {
  title: 'Components/Select',
  component: Select
};

export const Fruit = () => (
  <Select
    name="Fruit"
    label="Choose a fruit"
    placeholder="Select an option"
    options={[
      { value: 'Strawberry', label: 'Strawberry' },
      { value: 'Watermelon', label: 'Watermelon' },
      { value: 'Jackfruit', label: 'Jackfruit' }
    ]}
    onBlur={() => {
      console.log('Success!');
    }}
  />
);

export const Example = () => (
  <Select
    name="Example name"
    label="Example label"
    placeholder="Example value"
    options={[
      { value: '1', label: '1' },
      { value: '2', label: '2' },
      { value: '3', label: '3' },
      { value: '4', label: '4' }
    ]}
    onBlur={() => {
      console.log('Success!');
    }}
  />
);
