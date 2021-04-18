import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

import SubmitResourceForm from './SubmitResourceForm';

describe('SubmitResourceForm', () => {
  test('renders Example component', () => {
    render(
      <BrowserRouter>
        <SubmitResourceForm value="Hello" />
      </BrowserRouter>
    );

    expect(screen.getByText('Hello'));
  });
});
