import React from 'react';
import { SVG } from '../Icons.styles';

const Bookmark = () => {
  return (
    <>
      <SVG>
        <path
          d="M19 21L12 16L5 21V5C5 4.46957 5.21071 3.96086 5.58579 3.58579C5.96086 3.21071 6.46957 3 7 3H17C17.5304 3 18.0391 3.21071 18.4142 3.58579C18.7893 3.96086 19 4.46957 19 5V21Z"
          stroke="var(--lightblue)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </SVG>
    </>
  );
};

export default Bookmark;
