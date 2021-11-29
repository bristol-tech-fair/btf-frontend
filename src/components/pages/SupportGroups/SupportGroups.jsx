import React from 'react';
import PropTypes from 'prop-types';
import DefaultPageLayout from 'components/common/Layout/DefaultPageLayout';
import { SupportGroupsWrapper } from './SupportGroups.styles';

const SupportGroups = ({ value }) => {
  return (
    <DefaultPageLayout>
      <SupportGroupsWrapper>
        <p>{value}</p>
        <h1>This is the Support Group page. It is here to check the Router</h1>
      </SupportGroupsWrapper>
    </DefaultPageLayout>
  );
};

SupportGroups.propTypes = {
  value: PropTypes.string.isRequired
};

export default SupportGroups;
