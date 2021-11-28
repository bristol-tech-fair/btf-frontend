import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SecondaryButton = ({ content, type = 'button', onClick }) => {
  return (
    <SecondaryButtonWrapper type={type} onClick={onClick}>
      {content}
    </SecondaryButtonWrapper>
  );
};

SecondaryButton.propTypes = {
  content: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  onClick: PropTypes.func
};

const SecondaryButtonWrapper = styled.button`
  font-weight: 700;
  background: var(--lightblue);
  color: var(--lightgrey);
  padding: var(--smallest-space) var(--medium-space);
  border-radius: 10rem;

  &:hover {
    background: var(--logopink);
    color: var(--lightgrey);
  }

  &:active,
  &:focus {
    background: var(--logopink);
    color: var(--lightgrey);
    box-shadow: 0 0 0 0.4rem var(--darkpink);
  }
`;

export default SecondaryButton;
