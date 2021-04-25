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
  FilterColumnOne,
  FilterColumnTwo,
  FilterColumnThree,
  FilterColumnFour,
  FilterTitle
  // FilterSelect,
  // FilterButtons
} from './LearningResources.styles';

const LearningResources = () => {
  return (
    <DefaultPageLayout>
      <MainContainer>
        <PageTitle>Learning Resources</PageTitle>
        <PrimaryButton content="Primary button" type="button" />
        <FilterContainer>
          <FilterRow>
            <FilterColumnOne>
              <FilterTitle>Filter</FilterTitle>
            </FilterColumnOne>
            <FilterColumnTwo>
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
            </FilterColumnTwo>
            <FilterColumnThree>
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
            </FilterColumnThree>
            <FilterColumnFour>
              <PrimaryButton content="Primary button" type="button" />
            </FilterColumnFour>
          </FilterRow>
          <FilterRow>
            <FilterColumnOne />
            <FilterColumnTwo />
            <FilterColumnThree />
            <FilterColumnFour>
              <TextButton content="Text button" type="button" />
            </FilterColumnFour>
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
