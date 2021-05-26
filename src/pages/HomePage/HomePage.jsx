import React from 'react';
import PropTypes from 'prop-types';
import { HomePageWrapper, TitleWrapper, AboutWrapper } from './HomePage.styles';
import DefaultPageLayout from '../Layout/DefaultPageLayout';
import PrimaryButton from '../../components/PrimaryButton';
import List from '../../components/List';
import NavLink from '../../components/NavLink';
import ResourceCard from '../../components/ResourceCard';
import ClubCard from '../../components/ClubCard/ClubCard';

const HomePage = ({ navPath, resourceData, clubData }) => {
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
        <NavLink path={navPath} content="Read more.." />
      </AboutWrapper>
      <TitleWrapper>Learning Resources</TitleWrapper>
      <List Component={ResourceCard} data={resourceData} _id="1" />
      <TitleWrapper>Club Card</TitleWrapper>
      <List Component={ClubCard} _id="1" data={clubData} />
    </DefaultPageLayout>
  );
};

HomePage.propTypes = {
  navPath: PropTypes.string.isRequired,
  resourceData: PropTypes.func.isRequired,
  clubData: PropTypes.func.isRequired
};

export default HomePage;
