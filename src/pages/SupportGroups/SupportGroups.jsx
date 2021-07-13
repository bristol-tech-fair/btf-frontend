import React from 'react';
import PropTypes from 'prop-types';
import { SupportGroupsWrapper } from './SupportGroups.styles';

const SupportGroups = ({ value }) => {
  return (
    <SupportGroupsWrapper>
      <p>{value}</p>
    </SupportGroupsWrapper>
  );
};

SupportGroups.propTypes = {
  value: PropTypes.string.isRequired
};

export default SupportGroups;
