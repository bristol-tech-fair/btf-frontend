import React from 'react';
import PropTypes from 'prop-types';
import { CompetitionsWrapper } from './Competitions.styles';

const Competitions = ({ value }) => {
  return (
    <CompetitionsWrapper>
      <p>{value}</p>
      <h1>Compete for last bread crumb</h1>
    </CompetitionsWrapper>
  );
};

Competitions.propTypes = {
  value: PropTypes.string.isRequired
};

export default Competitions;
