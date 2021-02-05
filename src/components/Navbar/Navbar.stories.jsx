import React from 'react';
import Navbar from './Navbar';

export default {
  title: 'Components/Navbar',
  component: Navbar
};

export const TestNav = () => (
  <Navbar>
    <p>Test1</p>
    <p>Test2</p>
  </Navbar>
);
