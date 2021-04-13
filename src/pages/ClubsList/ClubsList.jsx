import React from 'react';
import PropTypes from 'prop-types';
import ResourceListLayout from '../Layout/ResourceListLayout';

const ClubsList = ({ list }) => {
  return <ResourceListLayout>{list}</ResourceListLayout>;
};

ClubsList.propTypes = { list: PropTypes.node };

export default ClubsList;
