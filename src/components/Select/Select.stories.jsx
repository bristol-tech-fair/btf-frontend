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

export const Example = () => (
  <Select
    name="Example name"
    label="Example label"
    defaultValue="Example default value"
    options={[
      { optionValue: '1', optionLabel: '1' },
      { optionValue: '2', optionLabel: '2' },
      { optionValue: '3', optionLabel: '3' },
      { optionValue: '4', optionLabel: '4' }
    ]}
    onBlur={() => {
      console.log('Success!');
    }}
  />
);
