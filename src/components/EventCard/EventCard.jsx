import React from 'react';
import PropTypes from 'prop-types';
import NavLink from '../NavLink/NavLink';
import Facebook from '../Icons/Facebook';
import LinkedIn from '../Icons/LinkedIn';
import Twitter from '../Icons/Twitter';
import Bookmark from '../Icons/Bookmark';
import { EventCardWrapper } from './EventCard.styles';

const EventCard = (props) => {
  const { imgSrc, date, title, desc, url } = props;
  return (
    <EventCardWrapper>
      <img src={imgSrc} alt="Event Logo" />
      <h4>{date}</h4>
      <h3>{title}</h3>
      <div className="content">
        <p>{desc}</p>
        <NavLink content="Read more..." path={url} />
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
