import React from 'react';
import PropTypes from 'prop-types';
import { ClubsWrapper } from './Clubs.styles';

const Clubs = ({ value }) => {
  return (
    <ClubsWrapper>
      <p>{value}</p>
      <h1>This is the Club page. It is here to check the Router</h1>
    </ClubsWrapper>
  );
};

Clubs.propTypes = {
  value: PropTypes.string.isRequired
};

export default Clubs;
