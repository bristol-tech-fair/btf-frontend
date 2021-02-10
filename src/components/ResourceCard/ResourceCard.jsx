import React from 'react';
import PropTypes from 'prop-types';
import { ResourceCardWrapper } from './ResourceCard.styles';

const ResourceCard = ({ value }) => {
  return (
    <ResourceCardWrapper>
      <p>{value}</p>
    </ResourceCardWrapper>
  );
};

ResourceCard.propTypes = {
  value: PropTypes.string.isRequired
};

export default ResourceCard;
