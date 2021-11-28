import React from 'react';
import Loader from 'react-loader-spinner';
import styled from 'styled-components';

const Spinner = () => {
  return (
    <SpinnerWrapper>
      <Loader
        type="ThreeDots"
        color="var(--darkburgundy)"
        height={100}
        width={100}
        timeout={3000}
      />
    </SpinnerWrapper>
  );
};

const SpinnerWrapper = styled.div`
  display: grid;
  place-items: center;
`;

export default Spinner;
