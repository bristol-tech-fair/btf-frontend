import React from 'react';
import PropTypes from 'prop-types';
import { EventsWrapper } from './Events.styles';

const Events = ({ value }) => {
  return (
    <EventsWrapper>
      <p>{value}</p>
    </EventsWrapper>
  );
};

Events.propTypes = {
  value: PropTypes.string.isRequired
};

export default Events;
