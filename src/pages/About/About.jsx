import React from 'react';
import PropTypes from 'prop-types';
import { AboutWrapper } from './About.styles';

const About = ({ value }) => {
  return (
    <AboutWrapper>
      <p>{value}</p>
    </AboutWrapper>
  );
};

About.propTypes = {
  value: PropTypes.string.isRequired
};

export default About;
