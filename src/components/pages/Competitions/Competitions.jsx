import React from 'react';
import PropTypes from 'prop-types';
import DefaultPageLayout from 'components/common/Layout/DefaultPageLayout';
import { CompetitionsWrapper } from './Competitions.styles';

const Competitions = ({ value }) => {
  return (
    <DefaultPageLayout>
      <CompetitionsWrapper>
        <p>{value}</p>
        <h1>Compete for last bread crumb</h1>
      </CompetitionsWrapper>
    </DefaultPageLayout>
  );
};

Competitions.propTypes = {
  value: PropTypes.string.isRequired
};

export default Competitions;
