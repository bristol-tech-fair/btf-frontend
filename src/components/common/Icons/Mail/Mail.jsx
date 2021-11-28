import React from 'react';
import { SVG } from '../Icons.styles';

const Mail = () => {
  return (
    <SVG width="26" height="24" viewBox="0 0 26 24">
      <path
        d="M4.33341 4H21.6667C22.8584 4 23.8334 4.9 23.8334 6V18C23.8334 19.1 22.8584 20 21.6667 20H4.33341C3.14175 20 2.16675 19.1 2.16675 18V6C2.16675 4.9 3.14175 4 4.33341 4Z"
        stroke="var(--lightblue)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M23.8334 6L13.0001 13L2.16675 6"
        stroke="var(--lightblue)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SVG>
  );
};

export default Mail;
