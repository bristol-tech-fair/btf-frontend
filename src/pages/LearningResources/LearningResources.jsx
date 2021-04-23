import React from 'react';
// import PropTypes from 'prop-types';
import DefaultPageLayout from '../Layout/DefaultPageLayout';
import Select from '../../components/Select';
import TextButton from '../../components/TextButton';
import PrimaryButton from '../../components/PrimaryButton';
import {
  MainContainer,
  PageTitle,
  FilterContainer,
  FilterRow,
  FilterColumn,
  FilterTitle,
  FilterSelect,
  FilterButtons
} from './LearningResources.styles';

const LearningResources = () => {
  return (
    <DefaultPageLayout>
      <MainContainer>
        <PageTitle>Learning Resources</PageTitle>
        <FilterContainer>
          <FilterRow>
            <FilterColumn>
              <FilterTitle>Filter</FilterTitle>
            </FilterColumn>
            <FilterColumn>
              <FilterSelect>
                <Select
                  name="Fruit"
                  label=""
                  defaultValue="Fruits"
                  options={[
                    { optionValue: 'noneSelected', optionLabel: 'Age group' },
                    { optionValue: 'Strawberry', optionLabel: 'Strawberry' },
                    { optionValue: 'Watermelon', optionLabel: 'Watermelon' },
                    { optionValue: 'Jackfruit', optionLabel: 'Jackfruit' }
                  ]}
                  onBlur={() => {
                    console.log('Success!');
                  }}
                />
              </FilterSelect>
            </FilterColumn>
            <FilterColumn>
              <FilterSelect>
                <Select
                  name="Fruit"
                  label=""
                  defaultValue="Fruits"
                  options={[
                    { optionValue: 'noneSelected', optionLabel: 'Any topic' },
                    { optionValue: 'Strawberry', optionLabel: 'Strawberry' },
                    { optionValue: 'Watermelon', optionLabel: 'Watermelon' },
                    { optionValue: 'Jackfruit', optionLabel: 'Jackfruit' }
                  ]}
                  onBlur={() => {
                    console.log('Success!');
                  }}
                />
              </FilterSelect>
            </FilterColumn>
            <FilterColumn>
              <FilterButtons>
                <PrimaryButton content="Primary button" />
              </FilterButtons>
            </FilterColumn>
          </FilterRow>
          <FilterRow>
            <FilterColumn />
            <FilterColumn />
            <FilterColumn />
            <FilterColumn>
              <FilterButtons>
                <TextButton content="Text button" type="button" />
              </FilterButtons>
            </FilterColumn>
          </FilterRow>
        </FilterContainer>
        <h3>
          <span>below will be filter</span>
          <div>Here we will have a list of resource cards</div>
        </h3>
        <h3>and we insert button to show more resources</h3>
      </MainContainer>
    </DefaultPageLayout>
  );
};

// LearningResources.propTypes = { list: PropTypes.node };

export default LearningResources;
