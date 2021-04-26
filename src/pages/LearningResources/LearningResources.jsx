import React from 'react';
// import PropTypes from 'prop-types';
import DefaultPageLayout from '../Layout/DefaultPageLayout';
import Select from '../../components/Select';
import TextButton from '../../components/TextButton';
import PrimaryButton from '../../components/PrimaryButton';
import {
  MainContainer,
  PageTitle,
<<<<<<< HEAD
  Row,
  ColumnOne,
  ColumnTwo,
  ColumnThree,
  ColumnFour,
  FilterTitle,
  SelectContainer
=======
  FilterContainer,
  FilterRow,
  FilterColumnOne,
  FilterColumnTwo,
  FilterColumnThree,
  FilterColumnFour,
  FilterTitle
  // FilterSelect,
>>>>>>> 41fa4981c1e50edeec62990334c6d4c8750cf31e
  // FilterButtons
} from './LearningResources.styles';

const LearningResources = () => {
  return (
    <DefaultPageLayout>
      <MainContainer>
        <PageTitle>Learning Resources</PageTitle>
<<<<<<< HEAD
        <Row>
          <ColumnOne>
            <FilterTitle>Filter</FilterTitle>
          </ColumnOne>
          <ColumnTwo>
            <SelectContainer>
              <Select
                name="ages"
                label=""
                placeholder="Age group"
                options={[
                  { value: 'coding', label: 'Coding' },
                  { value: 'Watermelon', label: 'Watermelon' },
                  { value: 'Jackfruit', label: 'Jackfruit' }
=======
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
>>>>>>> 41fa4981c1e50edeec62990334c6d4c8750cf31e
                ]}
                onBlur={() => {
                  console.log('Success!');
                }}
              />
<<<<<<< HEAD
            </SelectContainer>
          </ColumnTwo>
          <ColumnThree>
            <SelectContainer>
              <Select
                name="topic"
                label=""
                placeholder="Any topic"
                options={[
                  { value: 'Strawberry', label: 'Strawberry' },
                  { value: 'Watermelon', label: 'Watermelon' },
                  { value: 'Jackfruit', label: 'Jackfruit' }
=======
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
>>>>>>> 41fa4981c1e50edeec62990334c6d4c8750cf31e
                ]}
                onBlur={() => {
                  console.log('Success!');
                }}
              />
<<<<<<< HEAD
            </SelectContainer>
          </ColumnThree>
          <ColumnFour>
            <PrimaryButton content="Primary button" type="button" />
          </ColumnFour>
        </Row>
        <Row>
          <ColumnOne />
          <ColumnTwo />
          <ColumnThree />
          <ColumnFour>
            <TextButton content="Clear Filters" type="button" />
          </ColumnFour>
        </Row>
=======
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
>>>>>>> 41fa4981c1e50edeec62990334c6d4c8750cf31e
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
