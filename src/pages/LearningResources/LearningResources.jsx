import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DefaultPageLayout from '../Layout/DefaultPageLayout';
import TertiaryButton from '../../components/TertiaryButton';
import ResourceCard from '../../components/ResourceCard';
import {
  MainContainer,
  PageTitle,
  ListContainer,
  FilterContainer
} from './LearningResources.styles';
import Filter from '../../components/Filter';
import List from '../../components/List';

// TODO Import list component/filter component

const LearningResources = () => {
  const [resourceData, setResourceData] = useState();

  const getResourceData = async () => {
    const res = await axios.get('/learningResources');
    setResourceData(res.data.data);
  };

  useEffect(() => {
    getResourceData();
  }, []);

  return (
    <DefaultPageLayout>
      <MainContainer>
        <PageTitle>Learning Resources</PageTitle>
        <FilterContainer>
          <Filter />
        </FilterContainer>

        <ListContainer>
          <List Component={ResourceCard} data={resourceData} />
        </ListContainer>
        <TertiaryButton content="Show more" type="button" />
      </MainContainer>
    </DefaultPageLayout>
  );
};

export default LearningResources;
