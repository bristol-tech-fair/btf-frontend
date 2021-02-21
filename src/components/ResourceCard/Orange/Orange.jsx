import React from 'react';
import PropTypes from 'prop-types';
import { Orng } from './Orange.styles';

const SmallOrange = ({ opacity, orange, white }) => {
  return (
    <Orng
      opacity={opacity}
      orange={orange}
      white={white}
      style={{ width: 'inherit', height: 'inherit', borderRadius: 'inherit' }}
    />
  );
};

SmallOrange.propTypes = {
  opacity: PropTypes.string,
  orange: PropTypes.string,
  white: PropTypes.string
};

export default SmallOrange;
