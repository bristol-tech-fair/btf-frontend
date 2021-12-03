import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import TermsAndConditions from './Terms';

describe('TermsAndConditions', () => {
  test('renders TermsAndConditions component', () => {
    render(<TermsAndConditions value="Hello" />, { wrapper: MemoryRouter });

    expect(screen.getByText('Hello'));
  });
});
