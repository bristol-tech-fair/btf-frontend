import React from 'react';
import PropTypes from 'prop-types';
import DefaultPageLayout from 'components/common/Layout/DefaultPageLayout';
import { CodeOfConductWrapper } from './CodeOfConduct.styles';

const CodeOfConduct = ({ value }) => {
  return (
    <DefaultPageLayout>
      <CodeOfConductWrapper>
        <p>{value}</p>
        <h1>Conduct the interrogation.</h1>
      </CodeOfConductWrapper>
    </DefaultPageLayout>
  );
};

CodeOfConduct.propTypes = {
  value: PropTypes.string.isRequired
};

export default CodeOfConduct;
