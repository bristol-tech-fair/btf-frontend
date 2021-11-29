import React from 'react';
import PropTypes from 'prop-types';
import DefaultPageLayout from 'components/common/Layout/DefaultPageLayout';
import { ClubsWrapper } from './Clubs.styles';

const Clubs = ({ value }) => {
  return (
    <DefaultPageLayout>
      <ClubsWrapper>
        <p>{value}</p>
        <h1>This is the Club page. It is here to check the Router</h1>
      </ClubsWrapper>
    </DefaultPageLayout>
  );
};

Clubs.propTypes = {
  value: PropTypes.string.isRequired
};

export default Clubs;
