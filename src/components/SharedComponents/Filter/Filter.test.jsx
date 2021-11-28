import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import Filter from './Filter';

const optionAge = [
  { value: '6-18', label: '6-18 years' },
  { value: '6-12', label: '6-12 years' },
  { value: '12-18', label: '12-18 years' }
];

const optionTopic = [
  { value: 'coding', label: 'Coding' },
  { value: 'maths', label: 'Maths' },
  { value: 'electronics', label: 'Electronics' }
];

describe('Filter', () => {
  test('Renders Filter component', () => {
    render(
      <BrowserRouter>
        <Filter selectAges={optionAge} selectCategory={optionTopic} />
      </BrowserRouter>
    );
    expect(screen.getByText('Filter'));
  });
  test('renders PrimaryButton component', () => {
    render(
      <BrowserRouter>
        <Filter selectAges={optionAge} selectCategory={optionTopic} />
      </BrowserRouter>
    );
    expect(screen.getByText('Find resources'));
  });
  test('renders TextButton component', () => {
    render(
      <BrowserRouter>
        <Filter selectAges={optionAge} selectCategory={optionTopic} />
      </BrowserRouter>
    );
    expect(screen.getByText('Clear Filters'));
  });
});
