import React from 'react';
import DefaultPageLayout from 'components/common/Layout/DefaultPageLayout';
import EventCard from 'components/pages/Events/EventCard';
import List from 'components/common/Layout/List';
import Spinner from 'components/common/Spinner';
import { ListContainer, PageTitle, MainContainer } from './Competitions.styles';

const Competitions = () => {
  // TODO: Replace this temporary data with API call
  const competitionData = [
    {
      imgSrc: './assets/images/codingbug.png',
      date: '13/5/2021',
      title: 'Coding Bug Event',
      desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
      url: '/'
    },
    {
      imgSrc: './assets/images/codingbug.png',
      date: '13/5/2021',
      title: 'Coding Bug Event',
      desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
      url: '/'
    }
  ];
  return (
    <DefaultPageLayout>
      <MainContainer>
        <PageTitle>Competitions</PageTitle>
        <ListContainer>
          {competitionData ? (
            <List Component={EventCard} data={competitionData} />
          ) : (
            <Spinner />
          )}
        </ListContainer>
      </MainContainer>
    </DefaultPageLayout>
  );
};

export default Competitions;
