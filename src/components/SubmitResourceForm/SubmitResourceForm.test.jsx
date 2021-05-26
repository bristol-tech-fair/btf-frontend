import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

import SubmitResourceForm from './SubmitResourceForm';

describe('SubmitResourceForm', () => {
  test('renders Example component', () => {
    render(
      <BrowserRouter>
        <SubmitResourceForm
          options={[
            { value: '8-11', label: '8-11' },
            { value: '12-15', label: '12-15' },
            { value: '16-18', label: '16-18' }
          ]}
        />
      </BrowserRouter>
    );
  });
});
