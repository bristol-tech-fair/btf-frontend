import React from 'react';
import PropTypes from 'prop-types';
import ResourceListLayout from '../Layout/ResourceListLayout';

const BooksList = ({ list }) => {
  return <ResourceListLayout>{list}</ResourceListLayout>;
};

BooksList.propTypes = { list: PropTypes.node };

export default BooksList;
