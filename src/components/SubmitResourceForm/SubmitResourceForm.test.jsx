import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

import SubmitResourceForm from './SubmitResourceForm';

const optionOne = [
  { value: 'a', label: 'b' },
  { value: 'c', label: 'd' },
  { value: 'e', label: 'f' }
];

const optionTwo = [
  { value: '1', label: '2' },
  { value: '3', label: '4' },
  { value: '5', label: '6' }
];

describe('SubmitResourceForm', () => {
  test('renders Example component', () => {
    render(
      <BrowserRouter>
        <SubmitResourceForm selectAges={optionOne} selectCategory={optionTwo} />
      </BrowserRouter>
    );
  });
});
