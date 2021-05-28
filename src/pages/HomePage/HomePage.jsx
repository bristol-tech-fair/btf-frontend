import React from 'react';
import PropTypes from 'prop-types';
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

const HomePage = ({
  readMoreUrl,
  resourceData,
  eventData,
  postData,
  sponsorData
}) => {
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
      <MobileCardWrapper>
        <List Component={ResourceCard} data={[resourceData[0]]} _id="1" />
      </MobileCardWrapper>
      <TabletCardWrapper>
        <List
          Component={ResourceCard}
          data={[resourceData[0], resourceData[1]]}
          _id="1"
        />
      </TabletCardWrapper>
      <DeskTopCardWrapper>
        <List Component={ResourceCard} data={resourceData} _id="1" />
      </DeskTopCardWrapper>
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
  resourceData: PropTypes.arrayOf(PropTypes.object),
  postData: PropTypes.arrayOf(PropTypes.object),
  sponsorData: PropTypes.arrayOf(PropTypes.object),
  eventData: PropTypes.func.isRequired
};

export default HomePage;
