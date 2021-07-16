import React from 'react';
import { render, screen } from '@testing-library/react';

import TermsAndConditions from './TandC';

describe('TermsAndConditions', () => {
  test('renders TermsAndConditions component', () => {
    render(<TermsAndConditions value="Hello" />);

    expect(screen.getByText('Hello'));
  });
});
