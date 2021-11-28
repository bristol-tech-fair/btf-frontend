import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import Footer from './Footer';

describe('Footer', () => {
  test('renders Footer component', () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );

    screen.debug();
  });
});
