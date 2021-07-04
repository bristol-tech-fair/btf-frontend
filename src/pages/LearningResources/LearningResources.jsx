import React from 'react';
// import PropTypes from 'prop-types';
import DefaultPageLayout from '../Layout/DefaultPageLayout';
// import Select from '../../components/Select';
// import TextButton from '../../components/TextButton';
// import PrimaryButton from '../../components/PrimaryButton';
import TertiaryButton from '../../components/TertiaryButton';
import ResourceCard from '../../components/ResourceCard';
import {
  MainContainer,
  PageTitle,
  // Row,
  // ColumnOne,
  // ColumnTwo,
  // ColumnThree,
  // ColumnFour,
  // FilterTitle,
  ListContainer
} from './LearningResources.styles';

// TODO Import list component/filter component

const LearningResources = () => {
  return (
    <DefaultPageLayout>
      <MainContainer>
        <PageTitle>Learning Resources</PageTitle>
        {/* <Row>
          <ColumnOne>
            <FilterTitle>Filter</FilterTitle>
          </ColumnOne>
          <ColumnTwo>
            <Select
              name="ages"
              label=""
              placeholder="Age group"
              options={[
                { value: 'Strawberry', label: 'Strawberry' },
                { value: 'Watermelon', label: 'Watermelon' },
                { value: 'Jackfruit', label: 'Jackfruit' }
              ]}
              onBlur={() => {
                console.log('Success!');
              }}
            />
          </ColumnTwo>
          <ColumnThree>
            <Select
              name="topic"
              label=""
              placeholder="Ant topic"
              options={[
                { value: 'Strawberry', label: 'Strawberry' },
                { value: 'Watermelon', label: 'Watermelon' },
                { value: 'Jackfruit', label: 'Jackfruit' }
              ]}
              onBlur={() => {
                console.log('Success!');
              }}
            />
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
        </Row> */}
        <ListContainer>
          <ResourceCard />
          <ResourceCard />
          <ResourceCard />
          <ResourceCard />
          <ResourceCard />
          <ResourceCard />
          <ResourceCard />
          <ResourceCard />
          <ResourceCard />
          <ResourceCard />
        </ListContainer>
        <TertiaryButton content="Show more" type="button" />
      </MainContainer>
    </DefaultPageLayout>
  );
};

// LearningResources.propTypes = { list: PropTypes.node };

export default LearningResources;
