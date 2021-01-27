import React from 'react';
import PropTypes from 'prop-types';
import { PatternWrapper } from './Pattern.styles';
import { smallSVG, mediumSVG, largeSVG } from './Pattern.svgs';
// import mediumSVG from './Pattern.svgs';
// import largeSVG from './Pattern.svgs';

const Pattern = ({ color = 'midblue', size = 'M' }) => {
  let svg;
  let patternSize;

  // validate size prop ('M' if validation fails)
  if (['L', 'M', 'S'].includes(size.toUpperCase())) {
    patternSize = size.toUpperCase();
  } else {
    patternSize = 'M';
  }

  switch (patternSize) {
    case 'S':
      svg = smallSVG;
      break;
    case 'M':
      svg = mediumSVG;
      break;
    case 'L':
      svg = largeSVG;
      break;
    default:
  }

  return (
    <PatternWrapper color={color}>
      <div dangerouslySetInnerHTML={svg} />
    </PatternWrapper>
  );
};

Pattern.propTypes = {
  color: PropTypes.oneOf([
    'lightpink',
    'darkpink',
    'mattepink',
    'logopink',
    'lightgrey',
    'darkgrey',
    'darkburgundy',
    'orange',
    'lightblue',
    'midblue',
    'darkblue'
  ]),
  size: PropTypes.string.isRequired
};

export default Pattern;
