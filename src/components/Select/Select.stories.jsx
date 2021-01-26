import React from 'react';
import Select from './Select';

export default {
  title: 'Components/Select',
  component: Select
};

export const HelloWorld = () => (
  <Select
    name="Fruit"
    label="Choose a fruit"
    defaultValue="Fruits"
    options={[
      { optionValue: 'noneSelected', optionLabel: 'Pick one!' },
      { optionValue: 'Strawberry', optionLabel: 'Strawberry' },
      { optionValue: 'Watermelon', optionLabel: 'Watermelon' },
      { optionValue: 'Jackfruit', optionLabel: 'Jackfruit' }
    ]}
    onBlur={() => {
      console.log('Success!');
    }}
  />
);
