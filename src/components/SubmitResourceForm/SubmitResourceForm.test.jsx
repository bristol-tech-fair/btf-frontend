import React from 'react';
import { render, screen } from '@testing-library/react';
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
  test('check if form fields are rendered', async () => {
    render(
      <BrowserRouter>
        <SubmitResourceForm selectAges={optionOne} selectCategory={optionTwo} />
      </BrowserRouter>
    );

    expect(
      screen.getByRole('button', { name: 'Submit', hidden: true })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('textbox', { name: 'Title*', hidden: true })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('textbox', { name: 'Description', hidden: true })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('combobox', { name: 'Category*', hidden: true })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('combobox', { name: 'Ages*', hidden: true })
    ).toBeInTheDocument();
  });
});

test('check if options of dropdown menu exists in the document', async () => {
  render(
    <BrowserRouter>
      <SubmitResourceForm selectAges={optionOne} selectCategory={optionTwo} />
    </BrowserRouter>
  );

  expect(
    screen.getByRole('option', { name: '2', hidden: true })
  ).toBeInTheDocument();
  expect(
    screen.getByRole('option', { name: 'd', hidden: true })
  ).toBeInTheDocument();
});
