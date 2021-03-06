import React from 'react';
import PropTypes from 'prop-types';
import { CodeOfConductWrapper } from './CodeOfConduct.styles';

const CodeOfConduct = ({ value }) => {
  return (
    <CodeOfConductWrapper>
      <p>{value}</p>
    </CodeOfConductWrapper>
  );
};

CodeOfConduct.propTypes = {
  value: PropTypes.string.isRequired
};

export default CodeOfConduct;
