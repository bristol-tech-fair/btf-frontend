import React from 'react';
import PropTypes from 'prop-types';
import {
  HomePageWrapper,
  TitleWrapper,
  AboutWrapper,
  EventCardWrapper,
  SponsorWrapper
} from './HomePage.styles';
import DefaultPageLayout from '../Layout/DefaultPageLayout';
import PrimaryButton from '../../components/PrimaryButton';
import List from '../../components/List';
import NavLink from '../../components/NavLink';
import ResourceCard from '../../components/ResourceCard';
import EventCard from '../../components/EventCard';
import PostCard from '../../components/PostCard';
import SponsorCard from '../../components/SponsorCard';

const HomePage = ({
  readMoreUrl,
  resourceData,
  eventData,
  postData,
  sponsorData
}) => {
  return (
    <DefaultPageLayout>
      <HomePageWrapper>
        <PrimaryButton content="Add Resources" />
      </HomePageWrapper>
      <TitleWrapper>About Us</TitleWrapper>
      <AboutWrapper>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.
        <NavLink path={readMoreUrl} content="Read more.." />
      </AboutWrapper>
      <TitleWrapper>Learning Resources</TitleWrapper>
      <List Component={ResourceCard} data={resourceData} _id="1" />
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
      <List Component={PostCard} _id="1" data={postData} />
      <TitleWrapper>Sponsors</TitleWrapper>
      <SponsorWrapper>
        {sponsorData.map((sponsor) => (
          <SponsorCard
            key={sponsor.sponsorName}
            sponsorLogo={sponsor.sponsorLogo}
            sponsorName={sponsor.sponsorName}
          />
        ))}
      </SponsorWrapper>
    </DefaultPageLayout>
  );
};

HomePage.propTypes = {
  readMoreUrl: PropTypes.string.isRequired,
  resourceData: PropTypes.func.isRequired,
  postData: PropTypes.func.isRequired,
  sponsorData: PropTypes.func.isRequired,
  eventData: PropTypes.func.isRequired
};

export default HomePage;
