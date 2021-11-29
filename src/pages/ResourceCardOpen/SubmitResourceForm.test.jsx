import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

import ResourceCardOpen from './ResourceCardOpen';

describe('ResourceCardOpen', () => {
  test('Render page ', () => {
    render(
      <BrowserRouter>
        <ResourceCardOpen />
      </BrowserRouter>
    );
    screen.debug();
  });
});
