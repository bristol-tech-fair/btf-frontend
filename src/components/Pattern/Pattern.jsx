import React from 'react';
import PropTypes from 'prop-types';
import { PatternWrapper } from './Pattern.styles';
import { smallSVG, mediumSVG, largeSVG } from './Pattern.svgs';

const Pattern = ({ color = 'midblue', size = 'M' }) => {
  let svg;

  switch (size) {
    case 'S':
    case 's':
      svg = smallSVG;
      break;
    case 'M':
    case 'm':
      svg = mediumSVG;
      break;
    case 'L':
    case 'l':
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
  size: PropTypes.oneOf(['S', 's', 'M', 'm', 'L', 'l'])
};

export default Pattern;
