import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import {
  BannerWrapper,
  TitleWrapper,
  AboutWrapper,
  MobileCardWrapper,
  TabletCardWrapper,
  DeskTopCardWrapper,
  EventCardWrapper,
  TabletEventCardWrapper,
  SponsorWrapper,
  SponsorLogoWrapper
} from './HomePage.styles';
import DefaultPageLayout from '../Layout/DefaultPageLayout';
import PrimaryButton from '../../components/PrimaryButton';
import List from '../../components/List';
import NavLink from '../../components/NavLink';
import ResourceCard from '../../components/ResourceCard';
import EventCard from '../../components/EventCard';
import PostCard from '../../components/PostCard';
import SponsorCard from '../../components/SponsorCard';
import Spinner from '../../components/Spinner';

const HomePage = ({ readMoreUrl }) => {
  const [resourceData, setResourceData] = useState();

  const getResourceData = async () => {
    const res = await axios.get('/learningResources');
    setResourceData(res.data.data);
  };

  useEffect(() => {
    getResourceData();
  }, []);

  // TODO: Replace this temporary data with API call
  const eventData = {
    imgSrc: './assets/images/codingbug.png',
    date: '13/5/2021',
    title: 'Coding Bug Event',
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    url: '/'
  };

  // TODO: Replace this temporary data with API call
  const postData = [
    {
      title: 'If you love data come and speak to KETL',
      coverUrl: './assets/images/background.png',
      category: 'EVENT',
      date: '09/02/2011',
      bookmark: '/',
      shareLink: '/',
      postLink: '/'
    },
    {
      title: 'If you love data come and speak to KETL',
      coverUrl: './assets/images/background.png',
      category: 'EVENT',
      date: '09/02/2011',
      bookmark: '/',
      shareLink: '/',
      postLink: '/'
    },
    {
      title: 'If you love data come and speak to KETL',
      coverUrl: './assets/images/background.png',
      category: 'EVENT',
      date: '09/02/2011',
      bookmark: '/',
      shareLink: '/',
      postLink: '/'
    },
    {
      title: 'If you love data come and speak to KETL',
      coverUrl: './assets/images/background.png',
      category: 'EVENT',
      date: '09/02/2011',
      bookmark: '/',
      shareLink: '/',
      postLink: '/'
    }
  ];

  // TODO: Replace this temporary data with API call
  const sponsorData = [
    {
      sponsorLogo: 'https://via.placeholder.com/240x140',
      sponsorName: 'WTH1'
    },
    {
      sponsorLogo: 'https://via.placeholder.com/240x140',
      sponsorName: 'WTH2'
    },
    {
      sponsorLogo: 'https://via.placeholder.com/240x140',
      sponsorName: 'WTH3'
    },
    {
      sponsorLogo: 'https://via.placeholder.com/240x140',
      sponsorName: 'WTH4'
    },
    {
      sponsorLogo: 'https://via.placeholder.com/240x140',
      sponsorName: 'WTH5'
    }
  ];

  return (
    <DefaultPageLayout>
      <BannerWrapper>
        <PrimaryButton content="Add Resource" />
      </BannerWrapper>
      <TitleWrapper>About Us</TitleWrapper>
      <AboutWrapper>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.
        <NavLink path={readMoreUrl} content="Read more.." />
      </AboutWrapper>
      <TitleWrapper>Learning Resources</TitleWrapper>

      {resourceData ? (
        <>
          <MobileCardWrapper>
            <List Component={ResourceCard} data={[resourceData[0]]} _id={1} />
          </MobileCardWrapper>
          <TabletCardWrapper>
            <List
              Component={ResourceCard}
              data={[resourceData[0], resourceData[1]]}
              _id={1}
            />
          </TabletCardWrapper>
          <DeskTopCardWrapper>
            <List Component={ResourceCard} data={resourceData} _id={1} />
          </DeskTopCardWrapper>
        </>
      ) : (
        <Spinner />
      )}

      <TitleWrapper>Events</TitleWrapper>
      <EventCardWrapper>
        <EventCard
          imgSrc={eventData.imgSrc}
          date={eventData.date}
          title={eventData.title}
          desc={eventData.desc}
          url={eventData.url}
        />
      </EventCardWrapper>
      <TitleWrapper>Posts</TitleWrapper>
      <MobileCardWrapper>
        <List Component={PostCard} _id={1} data={[postData[0]]} />
      </MobileCardWrapper>
      <TabletEventCardWrapper>
        <List Component={PostCard} _id={1} data={[postData[0], postData[1]]} />
      </TabletEventCardWrapper>
      <DeskTopCardWrapper>
        <List Component={PostCard} _id={1} data={postData} />
      </DeskTopCardWrapper>
      <SponsorWrapper>
        <TitleWrapper>Sponsors</TitleWrapper>
        <SponsorLogoWrapper>
          {sponsorData.map((sponsor) => (
            <SponsorCard
              key={sponsor.sponsorName}
              sponsorLogo={sponsor.sponsorLogo}
              sponsorName={sponsor.sponsorName}
            />
          ))}
        </SponsorLogoWrapper>
      </SponsorWrapper>
    </DefaultPageLayout>
  );
};

HomePage.propTypes = {
  readMoreUrl: PropTypes.string.isRequired,
  eventData: PropTypes.shape({
    imgSrc: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  }).isRequired
};

export default HomePage;
