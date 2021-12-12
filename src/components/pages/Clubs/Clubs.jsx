import React from 'react';
import DefaultPageLayout from 'components/common/Layout/DefaultPageLayout';
import Spinner from 'components/common/Spinner';
import List from 'components/common/Layout/List';
import { MainContainer, ListContainer, PageTitle } from './Clubs.styles';
import ClubCard from './ClubCard/ClubCard';

const Clubs = () => {
  // TODO: Replace this temporary data with API call
  const clubs = [
    {
      coverUrl: './assets/images/codingbug.png',
      url: 'https://www.wp.pl/',
      title: 'React Documentation 1'
    },
    {
      coverUrl: './assets/images/background.png',
      url: 'https://o2.pl/',
      title: 'React Documentation 2'
    },
    {
      coverUrl: './assets/images/book-of-making-cover.jpg',
      url: 'https://www.onet.pl/',
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
  return (
    <DefaultPageLayout>
      <MainContainer>
        <PageTitle>Clubs</PageTitle>
        <ListContainer>
          {clubs ? <List Component={ClubCard} data={clubs} /> : <Spinner />}
        </ListContainer>
      </MainContainer>
    </DefaultPageLayout>
  );
};

export default Clubs;
