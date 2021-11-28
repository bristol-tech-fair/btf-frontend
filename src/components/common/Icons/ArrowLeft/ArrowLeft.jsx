import React from 'react';
import { SVG } from '../Icons.styles';

const ArrowLeft = () => {
  return (
    <SVG>
      <path
        d="M19 12H5"
        stroke="var(--lightblue)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 19L5 12L12 5"
        stroke="var(--lightblue)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SVG>
  );
};

export default ArrowLeft;
