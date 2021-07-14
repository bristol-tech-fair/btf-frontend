import React from 'react';
import PropTypes from 'prop-types';
import { TandCWrapper } from './TandC.styles';

const TandC = ({ value }) => {
  return (
    <TandCWrapper>
      <p>{value}</p>
    </TandCWrapper>
  );
};

TandC.propTypes = {
  value: PropTypes.string.isRequired
};

export default TandC;
