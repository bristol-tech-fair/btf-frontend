import React from 'react';
import PropTypes from 'prop-types';
import { ContentContainer, Image, Title } from './ClubCard.styles';

const ClubCard = ({ coverUrl, title, url }) => {
  return (
    <ContentContainer
      href={url}
      target="_blank"
      rel="noopener noreferrer external"
    >
      <Image src={coverUrl} alt={title} />
      <Title>{title}</Title>
    </ContentContainer>
  );
};

ClubCard.propTypes = {
  title: PropTypes.string.isRequired,
  coverUrl: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default ClubCard;
