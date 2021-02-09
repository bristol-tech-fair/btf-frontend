import React from 'react';
import PropTypes from 'prop-types';
import { ModalContainerWrapper } from './ModalContainer.styles';

const ModalContainer = ({ children }) => {
  return <ModalContainerWrapper>{children}</ModalContainerWrapper>;
};

ModalContainer.propTypes = {
  children: PropTypes.node
};

export default ModalContainer;
