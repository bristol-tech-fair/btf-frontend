import React from 'react';
import ModalContainer from './ModalContainer';

export default {
  title: 'Components/ModalContainer',
  component: ModalContainer
};

export const TestModal = () => (
  <ModalContainer>
    <p>hello1</p>
    <p>hello2</p>
  </ModalContainer>
);
