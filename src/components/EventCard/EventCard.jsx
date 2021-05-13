import React from 'react';
import PropTypes from 'prop-types';
import { EventCardWrapper } from './EventCard.styles';

const EventCard = ({ value }) => {
  return (
    <EventCardWrapper>
      <p>{value}</p>
    </EventCardWrapper>
  );
};

EventCard.propTypes = {
  value: PropTypes.string.isRequired
};

export default EventCard;
