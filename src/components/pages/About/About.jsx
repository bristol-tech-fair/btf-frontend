import React from 'react';
import PropTypes from 'prop-types';
import { AboutWrapper } from './About.styles';

const About = ({ value }) => {
  return (
    <AboutWrapper>
      <p>{value}</p>
      <h1>This is the About page. It is here to check the Router</h1>
    </AboutWrapper>
  );
};

About.propTypes = {
  value: PropTypes.string.isRequired
};

export default About;
