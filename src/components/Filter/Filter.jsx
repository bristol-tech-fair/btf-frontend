import React from 'react';
import { FilterWrapper } from './Filter.styles';
import Select from '../Select';
import PrimaryButton from '../PrimaryButton';
import TextButton from '../TextButton';

const Filter = () => {
  return (
    <FilterWrapper>
      <Select
        name="Age Group"
        id="1"
        label="Filter"
        placeholder="Age group"
        options={[
          { value: '1', label: '6-18 years' },
          { value: '2', label: '6-12 years' },
          { value: '3', label: '12-18 years' }
        ]}
      />
      <PrimaryButton content="Find resources" />
      <TextButton content="Clear Filters" />
    </FilterWrapper>
  );
};

export default Filter;
