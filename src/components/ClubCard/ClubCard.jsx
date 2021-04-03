import React from 'react';
import PropTypes from 'prop-types';
import { Content } from './ClubCard.styles';

const ClubCard = ({ value }) => {
  return (
    <Content>
      <p>{value}</p>
    </Content>
  );
};

ClubCard.propTypes = {
  value: PropTypes.string.isRequired
};

export default ClubCard;
