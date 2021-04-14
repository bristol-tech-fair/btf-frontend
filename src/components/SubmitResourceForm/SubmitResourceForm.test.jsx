import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import SubmitResourceForm from './SubmitResourceForm';

describe('SubmitResourceForm', () => {
  test('renders Example component', () => {
    render(<SubmitResourceForm value="Hello" />);

    expect(screen.getByText('Hello'));
  });
});
