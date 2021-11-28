import React from 'react';
import PropTypes from 'prop-types';
import {
  Facebook,
  LinkedIn,
  Twitter,
  Bookmark
} from '../../SharedComponents/Icons';
import { EventCardWrapper, StyledLink } from './EventCard.styles';

const EventCard = (props) => {
  const { imgSrc, date, title, desc, url } = props;
  return (
    <EventCardWrapper>
      <img src={imgSrc} alt="Event Logo" />
      <div className="details">
        <h4>{date}</h4>
        <h3>{title}</h3>
        <div className="content">
          <p>{desc}</p>
          <StyledLink to={url}>Read more...</StyledLink>
        </div>
      </div>
      <div className="vectors">
        <a href="www.facebook.com">
          <Facebook />
        </a>
        <a href="www.linkedin.com">
          <LinkedIn />
        </a>
        <a href="www.twitter.com">
          <Twitter />
        </a>
        <a href="www.bristoltechfair.com">
          <Bookmark />
        </a>
      </div>
    </EventCardWrapper>
  );
};

EventCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default EventCard;
