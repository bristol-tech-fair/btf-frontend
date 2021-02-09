import React from 'react';
import { render, screen } from '@testing-library/react';

import ModalContainer from './ModalContainer';

describe('ModalContainer', () => {
  test('renders ModalContainer component', () => {
    render(
      <ModalContainer>
        <p>Test</p>
      </ModalContainer>
    );

    expect(screen.getByText('Test'));
  });
});
