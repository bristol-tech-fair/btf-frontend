import React from 'react';
import PropTypes from 'prop-types';
import { ContentContainer, Image, Title } from './ClubCard.styles';

const ClubCard = ({ coverUrl, title, to }) => {
  return (
    <ContentContainer to={to}>
      <Image src={coverUrl} alt={title} />
      <Title>{title}</Title>
    </ContentContainer>
  );
};

ClubCard.propTypes = {
  title: PropTypes.string.isRequired,
  coverUrl: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired
};

export default ClubCard;
