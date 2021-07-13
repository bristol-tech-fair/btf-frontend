import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import SubmitResourceForm from './SubmitResourceForm';

export default {
  title: 'Components/SubmitResourceForm',
  component: SubmitResourceForm
};

export const TestSubmitResourceForm = () => (
  <BrowserRouter>
    <SubmitResourceForm
      selectAges={[
        { value: '8-11', label: '8-11' },
        { value: '12-15', label: '12-15' },
        { value: '16-18', label: '16-18' }
      ]}
      selectCategory={[
        { value: 'maths', label: 'maths' },
        { value: 'coding', label: 'coding' },
        { value: 'engineering', label: 'engineering' }
      ]}
    />
  </BrowserRouter>
);
