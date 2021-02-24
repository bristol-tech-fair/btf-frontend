import React from 'react';
import PropTypes from 'prop-types';
import { PatternWrapper } from './Pattern.styles';
import { SmallSVG, MediumSVG, LargeSVG } from './Pattern.svgs';

const Pattern = ({ color = 'midblue', size = 'M' }) => {
  let Svg;

  switch (size) {
    case 'S':
    case 's':
      Svg = SmallSVG;
      break;
    case 'M':
    case 'm':
      Svg = MediumSVG;
      break;
    case 'L':
    case 'l':
      Svg = LargeSVG;
      break;
    default:
  }

  return (
    <PatternWrapper color={color}>
      <Svg />
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
