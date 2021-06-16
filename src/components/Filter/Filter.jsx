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
            { value: '6-18', label: '6-18 years' },
            { value: '6-12', label: '6-12 years' },
            { value: '12-18', label: '12-18 years' }
          ]}
        />
        <PrimaryButton content="Find resources" />
      </SelectWrapper>
      <ButtonContainer>
        <TextButton content="Clear Filters" />
      </ButtonContainer>
    </FilterWrapper>
  );
};

export default Filter;
