import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import Filter from './Filter';

const optionAge = [
  { value: '6-18', label: '6-18 years' },
  { value: '6-12', label: '6-12 years'  },
  { value: '12-18', label: '12-18 years' }
];

const optionTopic = [
  { value: 'coding', label: 'Coding' },
  { value: 'maths', label: 'Maths' },
  { value: 'electronics', label: 'Electronics' }
];

describe('Filter', () => {
  test('check if form fields are rendered', async () => {
    render(
    <BrowserRouter>
      <Filter selectAges={optionAge} selectCategory={optionTopic} />
    </BrowserRouter>
  );

  expect(
    screen.getByRole('button', { name: 'Find resources' })
  ).toBeInTheDocument();
  expect(
    screen.getByRole('button', { name: 'Clear filters' })
  ).toBeInTheDocument();
  expect(
    screen.getByRole('select', { id: 'topic' })
  ).toBeInTheDocument();
  expect(
    screen.getByRole('select', { id: 'ages' })
  ).toBeInTheDocument();
  expect(screen.getByText('Filter'));
  });
});

test('check if options of select dropdowns exists in the document', async () => {
  render(
    <BrowserRouter>
      <Filter />
    </BrowserRouter>
  );

  expect(
    screen.getByRole('option', { name: '6-18'})
  ).toBeInTheDocument();
  expect(
    screen.getByRole('option', { name: 'coding'})
  ).toBeInTheDocument();
});
