import React from 'react';
import PropTypes from 'prop-types';
import { LoveIllustrationWrapper } from './LoveIllustration.styles';

const LoveIllustration = ({ value }) => {
  return (
    <LoveIllustrationWrapper>
      <p>{value}</p>
    </LoveIllustrationWrapper>
  );
};

LoveIllustration.propTypes = {
  value: PropTypes.string.isRequired
};

export default LoveIllustration;
