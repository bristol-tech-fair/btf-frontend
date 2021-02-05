import React from 'react';
import PageContainer from './PageContainer';

export default {
  title: 'Components/PageContainer',
  component: PageContainer
};

export const PageContainerWithColumDIrection = () => (
  <PageContainer direction="column">
    <p>hello1</p>
    <p>hello2</p>
  </PageContainer>
);
