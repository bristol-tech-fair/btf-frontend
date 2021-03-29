import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Footer from './Footer';

export default {
  title: 'Components/Footer',
  component: Footer
};

export const FooterTesting = () => (
  <BrowserRouter>
    <Footer />
  </BrowserRouter>
);
