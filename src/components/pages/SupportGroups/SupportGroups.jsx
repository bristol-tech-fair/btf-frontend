import React, { useEffect, useState } from 'react';
import DefaultPageLayout from 'components/common/Layout/DefaultPageLayout';
import Spinner from 'components/common/Spinner';
import List from 'components/common/Layout/List';
import {
  ListContainer,
  MainContainer,
  PageTitle
} from './SupportGroups.styles';
import ClubCard from '../Clubs/ClubCard/ClubCard';

//!   CONST below is just for testing purpose. Proper import need to be implemented
const items = [
  {
    coverUrl: './assets/images/codingbug.png',
    to: 'https://www.wp.pl/',
    title: 'React Documentation 1'
  },
  {
    coverUrl: './assets/images/codingbug.png',
    to: 'https://www.wp.pl/',
    title: 'React Documentation 2'
  },
  {
    coverUrl: './assets/images/codingbug.png',
    to: 'https://www.wp.pl/',
    title: 'React Documentation 3'
  },
  {
    coverUrl: './assets/images/codingbug.png',
    to: 'https://www.wp.pl/',
    title: 'React Documentation 4'
  },
  {
    coverUrl: './assets/images/codingbug.png',
    to: 'https://www.wp.pl/',
    title: 'React Documentation 5'
  }
];

const SupportGroups = () => {
  const [resourceData, setResourceData] = useState(items);

  useEffect(() => {
    setResourceData(items);
  }, []);

  return (
    <DefaultPageLayout>
      <MainContainer>
        <PageTitle>Support Groups</PageTitle>

        {resourceData ? (
          <>
            <ListContainer>
              <List Component={ClubCard} data={resourceData} />
            </ListContainer>
          </>
        ) : (
          <Spinner />
        )}
      </MainContainer>
    </DefaultPageLayout>
  );
};

export default SupportGroups;
