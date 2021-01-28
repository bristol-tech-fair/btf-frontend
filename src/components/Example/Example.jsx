import React from 'react';
import PropTypes from 'prop-types';
import { ExampleWrapper } from './Example.styles';
import { File, Heart, ArrowCircleLeft } from '../Icons';

const Example = ({ value }) => {
  return (
    <ExampleWrapper>
      <p>{value}</p>
      <File />
      <Heart />
      <ArrowCircleLeft />
    </ExampleWrapper>
  );
};

Example.propTypes = {
  value: PropTypes.string.isRequired
};

export default Example;
