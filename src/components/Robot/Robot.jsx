import React from 'react';
import PropTypes from 'prop-types';

const Robot = ({ path, width, height, viewBox }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect width={width} height={height} fill="url(#pattern0)" />
      <defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#image0"
            transform="translate(-0.0131782) scale(0.000250575)"
          />
        </pattern>
        <image id="image0" width="4096" height="3911" xlinkHref={path} />
      </defs>
    </svg>
  );
};

Robot.propTypes = {
  path: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  viewBox: PropTypes.number
};

Robot.defaultProps = {
  width: 300,
  height: 294,
  viewBox: '0 0 300 294'
};

export default Robot;
