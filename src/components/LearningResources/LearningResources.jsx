import React, { useEffect, useState } from 'react';
// import axios from 'axios';
import DefaultPageLayout from '../SharedComponents/Layout/DefaultPageLayout';
import ResourceCard from './ResourceCard';
import {
  MainContainer,
  PageTitle,
  ListContainer,
  FilterContainer,
  SelectWrapper,
  FilterText,
  Form
} from './LearningResources.styles';
import List from '../SharedComponents/Layout/List';
import Spinner from '../SharedComponents/Spinner';
import { Select } from '../SharedComponents/Inputs';

//!   CONST below is just for testing purpose. Proper import need to be implemented
const items = [
  {
    category: 'Coding',
    ages: '6-18',
    title: 'First Title',
    description: 'Here we have some description for testing purposes',
    rating: '3',
    tags: ['some', 'fantastic', 'tag', 'one'],
    color: 'mattepink'
  },
  {
    category: 'Maths',
    ages: '12-18',
    title: 'Second Title',
    description: 'Here we have some description for testing purposes',
    rating: '5',
    tags: ['some', 'fantastic', 'tag', 'two'],
    color: 'darkburgundy'
  },
  {
    category: 'Electronics',
    ages: '6-18',
    title: 'Third Title',
    description: 'Here we have some description for testing purposes',
    rating: '4',
    tags: ['some', 'fantastic', 'tag', 'three'],
    color: 'darkblue'
  },
  {
    category: 'Electronics',
    ages: '6-12',
    title: 'Fifth Title',
    description: 'Here we have some description for testing purposes',
    rating: '4',
    tags: ['some', 'fantastic', 'tag', 'three'],
    color: 'logopink'
  },
  {
    category: 'Robotics',
    ages: '12-18',
    title: 'Fourth Title',
    description: 'Here we have some description for testing purposes',
    rating: '2',
    tags: ['some', 'fantastic', 'tag', 'four'],
    color: 'midblue',
    to: '/https://www.wp.pl/'
  }
];

const LearningResources = () => {
  //* set and setState being initialized
  const [resourceData, setResourceData] = useState(items);
  const [ages, setAges] = useState('All');
  const [topics, setTopics] = useState('All');

  // const getResourceData = async () => {
  //   const res = await axios.get(
  //     'https://api.jsonbin.io/b/61965f820ddbee6f8b0e2811'
  //   );
  //   setResourceData(res.data.data);
  // };

  // e = event for the value when select changes
  const handleFilterChange = (e, filterType) => {
    // changes state
    switch (filterType) {
      case 'ages':
        setAges(e.target.value);
        break;
      case 'topics':
        setTopics(e.target.value);
        break;
      default:
        break;
    }
  };

  // initial render then updates when state/criteria is changed
  useEffect(() => {
    let filteredData = items;

    if (ages === 'All') {
      setResourceData(items);
    }
    if (topics === 'All') {
      setResourceData(items);
    }

    if (ages !== 'All') {
      filteredData = filteredData.filter((data) => data.ages === ages);
    }
    if (topics !== 'All') {
      filteredData = filteredData.filter((data) => data.category === topics);
    }
    setResourceData(filteredData);
    // variable being listened for change
  }, [ages, topics]);

  return (
    <DefaultPageLayout>
      <MainContainer>
        <PageTitle>Learning Resources</PageTitle>

        <>
          <FilterContainer>
            <Form>
              <FilterText>Filter</FilterText>
              <SelectWrapper>
                <Select
                  name="Age Group"
                  id="ages"
                  label="Age group"
                  placeholder="Age group"
                  options={[
                    { value: 'All', label: 'All' },
                    { value: '6-18', label: '6-18 years' },
                    { value: '6-12', label: '6-12 years' },
                    { value: '12-18', label: '12-18 years' }
                  ]}
                  onChange={(e) => handleFilterChange(e, 'ages')}
                />
              </SelectWrapper>
              <SelectWrapper>
                <Select
                  name="Any topic"
                  id="topic"
                  label="Topic"
                  placeholder="Any topic"
                  options={[
                    { value: 'All', label: 'All' },
                    { value: 'Coding', label: 'Coding' },
                    { value: 'Maths', label: 'Maths' },
                    { value: 'Electronics', label: 'Electronics' }
                  ]}
                  onChange={(e) => handleFilterChange(e, 'topics')}
                />
              </SelectWrapper>
            </Form>
          </FilterContainer>
        </>

        {resourceData ? (
          <>
            <ListContainer>
              <List Component={ResourceCard} data={resourceData} />
            </ListContainer>
          </>
        ) : (
          <Spinner />
        )}
      </MainContainer>
    </DefaultPageLayout>
  );
};

export default LearningResources;
