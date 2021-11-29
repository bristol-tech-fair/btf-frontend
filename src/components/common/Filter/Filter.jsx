import React from 'react';
import {
  FilterWrapper,
  SelectWrapper,
  FilterText,
  ClearFilterButton,
  ButtonContainer
} from './Filter.styles';
import { Select } from '../Inputs';
import { PrimaryButton, TextButton } from '../Buttons';

const Filter = () => {
  return (
    <FilterWrapper>
      <FilterText>Filter</FilterText>
      <SelectWrapper>
        <Select
          name="Age Group"
          id="ages"
          label="Age group"
          placeholder="Age group"
          options={[
            { value: '6-18', label: '6-18 years' },
            { value: '6-12', label: '6-12 years' },
            { value: '12-18', label: '12-18 years' }
          ]}
        />
      </SelectWrapper>
      <SelectWrapper>
        <Select
          name="Any topic"
          id="topic"
          label="Topic"
          placeholder="Any topic"
          options={[
            { value: 'coding', label: 'Coding' },
            { value: 'maths', label: 'Maths' },
            { value: 'electronics', label: 'Electronics' }
          ]}
        />
      </SelectWrapper>
      <ButtonContainer>
        <PrimaryButton content="Find resources" type="submit" />
        <ClearFilterButton>
          <TextButton content="Clear Filters" />
        </ClearFilterButton>
      </ButtonContainer>
    </FilterWrapper>
  );
};

export default Filter;
