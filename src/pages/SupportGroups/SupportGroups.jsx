import React from 'react';
import PropTypes from 'prop-types';
import { SupportGroupsWrapper } from './SupportGroups.styles';

const SupportGroups = ({ value }) => {
  return (
    <SupportGroupsWrapper>
      <p>{value}</p>
      <h1>This is the Support Group page. It is here to check the Router</h1>
    </SupportGroupsWrapper>
  );
};

SupportGroups.propTypes = {
  value: PropTypes.string.isRequired
};

export default SupportGroups;
