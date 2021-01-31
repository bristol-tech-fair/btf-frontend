import React from 'react';
import PropTypes from 'prop-types';
import { ExampleWrapper } from './Example.styles';

const Example = ({ value }) => {
  return (
    <ExampleWrapper>
      <p>{value}</p>
    </ExampleWrapper>
  );
};

Example.propTypes = {
  value: PropTypes.string.isRequired
};

export default Example;
