import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ResourceCardOpen from './ResourceCardOpen';

export default {
  title: 'Components/Pages/ResourceCardOpen',
  component: ResourceCardOpen
};

export const ResourceCardOpenTest = () => (
  <BrowserRouter>
    <ResourceCardOpen
      facebookLink="https://www.wp.pl/"
      resourceLink="https://www.wp.pl/"
      twitterLink="https://www.wp.pl/"
      bookmarksLink="https://www.wp.pl/"
      linkedInLink="https://www.wp.pl/"
    />
  </BrowserRouter>
);
