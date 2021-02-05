import React from 'react';
import PropTypes from 'prop-types';
import { IllustrationLoveWrapper } from './IllustrationLove.styles';

const IllustrationLove = ({ value }) => {
  return (
    <IllustrationLoveWrapper>
      <p>{value}</p>
    </IllustrationLoveWrapper>
  );
};

IllustrationLove.propTypes = {
  value: PropTypes.string.isRequired
};

export default IllustrationLove;
