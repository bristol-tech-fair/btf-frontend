import React from 'react';
import { SVG } from '../Icons.styles';

const ArrowRight = () => {
  return (
    <SVG>
      <path
        d="M5 12L19 12"
        stroke="var(--lightblue)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 5L19 12L12 19"
        stroke="var(--lightblue)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SVG>
  );
};
export default ArrowRight;
