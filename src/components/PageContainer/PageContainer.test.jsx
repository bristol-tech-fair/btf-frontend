import React from 'react';
import { render, screen } from '@testing-library/react';

import PageContainer from './PageContainer';

describe('PageContainer', () => {
  test('renders PageContainer component', () => {
    render(
      <PageContainer>
        <p>Hello</p>
      </PageContainer>
    );

    expect(screen.getByText('Hello'));
  });
});
