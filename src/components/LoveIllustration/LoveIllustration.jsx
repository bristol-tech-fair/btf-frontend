import React from 'react';
import PropTypes from 'prop-types';
import { LoveIllustrationWrapper } from './LoveIllustration.styles';

// passing the props
const LoveIllustration = ({ path, width, height, viewBox }) => {
  return (
    <LoveIllustrationWrapper>
      <title id="loveTitle">Love Illustration</title>
      <desc id="loveDesc"> Blue and pink love sign. </desc>
      <svg
        width={width}
        height={height}
        viewBox={viewBox}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M310.512 0H29.488C13.2022 0 0 13.1771 0 29.432V132.568C0 148.823 13.2022 162 29.488 162H310.512C326.798 162 340 148.823 340 132.568V29.432C340 13.1771 326.798 0 310.512 0Z"
          fill="#F2F2F2"
        />
      </svg>
    </LoveIllustrationWrapper>
  );
};

LoveIllustration.propTypes = {
  path: PropTypes.string.isRequired,
  height: PropTypes.number,
  width: PropTypes.number,
  viewBox: PropTypes.string
};

LoveIllustration.defaultProps = {
  width: '340',
  height: '162',
  viewBox: '0 0 340 162'
};

export default LoveIllustration;
