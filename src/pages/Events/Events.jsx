import React from 'react';
import PropTypes from 'prop-types';
import { EventsWrapper } from './Events.styles';

const Events = ({ value }) => {
  return (
    <EventsWrapper>
      <p>{value}</p>
      <h1>This is the Event page. It is here to check the Router</h1>
    </EventsWrapper>
  );
};

Events.propTypes = {
  value: PropTypes.string.isRequired
};

export default Events;
