import React from 'react';
import PropTypes from 'prop-types';
import DefaultPageLayout from 'components/common/Layout/DefaultPageLayout';
import { EventsWrapper } from './Events.styles';

const Events = ({ value }) => {
  return (
    <DefaultPageLayout>
      <EventsWrapper>
        <p>{value}</p>
        <h1>This is the Event page. It is here to check the Router</h1>
      </EventsWrapper>
    </DefaultPageLayout>
  );
};

Events.propTypes = {
  value: PropTypes.string.isRequired
};

export default Events;
