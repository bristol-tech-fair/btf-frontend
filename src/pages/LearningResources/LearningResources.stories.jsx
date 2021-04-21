import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import LearningResources from './LearningResources';

export default {
  title: 'Components/Pages/LearningResources',
  component: LearningResources
};

export const LearningResourcesTest = () => (
  <BrowserRouter>
    <LearningResources />
  </BrowserRouter>
);
