import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import SubmitResourceForm from './SubmitResourceForm';

export default {
  title: 'Components/SubmitResourceForm',
  component: SubmitResourceForm
};

export const TestSubmitResourceForm = () => (
  <BrowserRouter>
    <SubmitResourceForm />
  </BrowserRouter>
);
