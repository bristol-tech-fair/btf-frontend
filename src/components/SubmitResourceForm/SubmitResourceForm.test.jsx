import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

import SubmitResourceForm from './SubmitResourceForm';

const optionOne = [
  { optionValue: 'a', optionLabel: 'b' },
  { optionValue: 'c', optionLabel: 'd' },
  { optionValue: 'e', optionLabel: 'f' }
];

const optionTwo = [
  { optionValue: '1', optionLabel: '2' },
  { optionValue: '3', optionLabel: '4' },
  { optionValue: '5', optionLabel: '6' }
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
