import React from 'react';
import PropTypes from 'prop-types';
import { ExampleWrapper } from './Example.styles';
import { File, Heart, ArrowCircleLeft, HeartFull, Share } from '../Icons';

const Example = ({ value }) => {
  return (
    <ExampleWrapper>
      <p>{value}</p>
      <File />
      <Heart />
      <HeartFull />
      <ArrowCircleLeft />
      <Share />
    </ExampleWrapper>
  );
};

Example.propTypes = {
  value: PropTypes.string.isRequired
};

export default Example;
