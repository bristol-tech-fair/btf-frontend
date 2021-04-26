import React from 'react';
// import PropTypes from 'prop-types';
import DefaultPageLayout from '../Layout/DefaultPageLayout';
import Select from '../../components/Select';
import TextButton from '../../components/TextButton';
import PrimaryButton from '../../components/PrimaryButton';
import {
  MainContainer,
  PageTitle,
  Row,
  ColumnOne,
  ColumnTwo,
  ColumnThree,
  ColumnFour,
  FilterTitle,
  SelectContainer
  // FilterButtons
} from './LearningResources.styles';

const LearningResources = () => {
  return (
    <DefaultPageLayout>
      <MainContainer>
        <PageTitle>Learning Resources</PageTitle>
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
                ]}
                onBlur={() => {
                  console.log('Success!');
                }}
              />
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
                ]}
                onBlur={() => {
                  console.log('Success!');
                }}
              />
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
