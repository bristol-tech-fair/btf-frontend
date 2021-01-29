import React from 'react';
import { SVG } from '../Icons.styles';

const ArrowCircleLeft = () => {
  return (
    <>
      <SVG>
        <path
          d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"
          stroke="var(--lightblue)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 8L8 12L12 16"
          stroke="var(--lightblue)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 12L8 12"
          stroke="var(--lightblue)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </SVG>
    </>
  );
};

export default ArrowCircleLeft;
