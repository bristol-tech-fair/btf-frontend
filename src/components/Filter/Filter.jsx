import React from 'react';
import { FilterWrapper, SelectWrapper, ButtonContainer } from './Filter.styles';
import Select from '../Select';
import PrimaryButton from '../PrimaryButton';
import TextButton from '../TextButton';

const Filter = () => {
  return (
    <FilterWrapper>
      <SelectWrapper>
        <Select
          name="Age Group"
          id="ages"
          label="Filter"
          placeholder="Age group"
          options={[
            { value: '1', label: '6-18 years' },
            { value: '2', label: '6-12 years' },
            { value: '3', label: '12-18 years' }
          ]}
        />
      </SelectWrapper>
      <PrimaryButton content="Find resources" />
      <ButtonContainer>
        <TextButton content="Clear Filters" />
      </ButtonContainer>
    </FilterWrapper>
  );
};

export default Filter;
