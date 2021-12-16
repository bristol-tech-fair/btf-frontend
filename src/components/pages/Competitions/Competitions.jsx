import React from 'react';
import PropTypes from 'prop-types';
import DefaultPageLayout from 'components/common/Layout/DefaultPageLayout';
import { EventCardWrapper } from './Competitions.styles';

const Competitions = ({ value }) => {
  return (
    <DefaultPageLayout>
      <EventCardWrapper>
        <p>{value}</p>
        <h1>Compete for last bread crumb</h1>
      </EventCardWrapper>
    </DefaultPageLayout>
  );
};

Competitions.propTypes = {
  value: PropTypes.string.isRequired
};

export default Competitions;
