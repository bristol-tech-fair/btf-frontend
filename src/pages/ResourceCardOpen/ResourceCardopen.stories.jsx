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
      dropdown={[
        { value: '8-11', label: '8-11' },
        { value: '12-15', label: '12-15' },
        { value: '16-18', label: '16-18' }
      ]}
      selectCategory={[
        { value: 'maths', label: 'maths' },
        { value: 'coding', label: 'coding' },
        { value: 'engineering', label: 'engineering' }
      ]}
      facebookLink="https://www.wp.pl/"
      resourceLink="https://www.wp.pl/"
      twitterLink="https://www.wp.pl/"
      bookmarksLink="https://www.wp.pl/"
      linkedInLink="https://www.wp.pl/"
    />
  </BrowserRouter>
);
