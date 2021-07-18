import React from 'react';
import PropTypes from 'prop-types';
import { ClubsWrapper } from './Clubs.styles';

const Clubs = ({ value }) => {
  return (
    <ClubsWrapper>
      <p>{value}</p>
    </ClubsWrapper>
  );
};

Clubs.propTypes = {
  value: PropTypes.string.isRequired
};

export default Clubs;
