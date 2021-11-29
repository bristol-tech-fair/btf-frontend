import React from 'react';
import PropTypes from 'prop-types';
import DefaultPageLayout from 'components/common/Layout/DefaultPageLayout';
import { AboutWrapper } from './About.styles';

const About = ({ value }) => {
  return (
    <DefaultPageLayout>
      <AboutWrapper>
        <p>{value}</p>
        <h1>This is the About page. It is here to check the Router</h1>
      </AboutWrapper>
    </DefaultPageLayout>
  );
};

About.propTypes = {
  value: PropTypes.string.isRequired
};

export default About;
