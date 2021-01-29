import React from 'react';
import { SVG } from '../Icons.styles';

const Cross = () => {
  return (
    <>
      <SVG>
        <path
          d="M18 6L6 18"
          stroke="var(--lightblue)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6 6L18 18"
          stroke="var(--lightblue)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </SVG>
    </>
  );
};

export default Cross;
