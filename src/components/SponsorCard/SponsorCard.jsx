import React from 'react';
import PropTypes from 'prop-types';
import { SponsorCardWrapper } from './SponsorCard.styles';

const SponsorCard = ({ sponsorLogo, sponsorName }) => {
  return (
    <SponsorCardWrapper>
      <img src={sponsorLogo} alt={sponsorName} />
    </SponsorCardWrapper>
  );
};

SponsorCard.propTypes = {
  sponsorLogo: PropTypes.string.isRequired,
  sponsorName: PropTypes.string.isRequired
};

export default SponsorCard;
