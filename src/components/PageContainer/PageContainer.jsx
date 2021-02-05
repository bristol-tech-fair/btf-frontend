import React from 'react';
import PropTypes from 'prop-types';
import { PageContainerWrapper } from './PageContainer.styles';

const PageContainer = ({ direction, children }) => {
  return (
    <PageContainerWrapper direction={direction}>
      {children}
    </PageContainerWrapper>
  );
};

PageContainer.propTypes = {
  direction: PropTypes.string,
  children: PropTypes.node
};

export default PageContainer;
