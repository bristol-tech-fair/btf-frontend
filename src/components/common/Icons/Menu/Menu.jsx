import React from 'react';
import { SVG } from '../Icons.styles';

const Menu = () => {
  return (
    <SVG>
      <path
        d="M3 12H21"
        stroke="var(--lightblue)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 6H21"
        stroke="var(--lightblue)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 18H21"
        stroke="var(--lightblue)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SVG>
  );
};

export default Menu;
