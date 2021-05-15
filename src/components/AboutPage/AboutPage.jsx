import React from 'react';
import PropTypes from 'prop-types';
import { AboutPageWrapper } from './AboutPage.styles';

const AboutPage = ({ value }) => {
  return (
    <AboutPageWrapper>
      <p>{value}</p>
    </AboutPageWrapper>
  );
};

AboutPage.propTypes = {
  value: PropTypes.string.isRequired
};

export default AboutPage;
