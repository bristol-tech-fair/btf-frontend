import React from 'react';
import { FilterWrapper, ButtonContainer } from './Filter.styles';
import Select from '../Select';
import PrimaryButton from '../PrimaryButton';
import TextButton from '../TextButton';

const Filter = () => {
  return (
    <FilterWrapper>
      <Select
        name="Age Group"
        id="ages"
        label="Filter"
        placeholder="Age group"
        leftlabel="true"
        options={[
          { value: '6-18', label: '6-18 years' },
          { value: '6-12', label: '6-12 years' },
          { value: '12-18', label: '12-18 years' }
        ]}
      />
      <Select
        name="Any topic"
        id="topic"
        label=""
        placeholder="Any topic"
        options={[
          { value: 'coding', label: 'Coding' },
          { value: 'maths', label: 'Maths' },
          { value: 'electronics', label: 'Electronics' }
        ]}
      />
      <ButtonContainer>
        <PrimaryButton content="Find resources" />
        <TextButton content="Clear Filters" />
      </ButtonContainer>
    </FilterWrapper>
  );
};

export default Filter;
