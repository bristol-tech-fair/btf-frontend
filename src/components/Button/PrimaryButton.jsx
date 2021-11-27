import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import mediaQuery from '../../utils/mediaQuery';

const PrimaryButton = ({ content, type = 'button', onClick }) => {
  return (
    <PrimaryButtonWrapper type={type} onClick={onClick}>
      {content}
    </PrimaryButtonWrapper>
  );
};

PrimaryButton.propTypes = {
  content: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  onClick: PropTypes.func
};

const PrimaryButtonWrapper = styled.button`
  padding: var(--small-space) var(--large-space);
  border-radius: 0.5rem;
  background: var(--lightblue);
  color: var(--lightgrey);
  font-weight: 700;
  ${mediaQuery.tablet} {
    padding: var(--small-space);
  }

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

export default PrimaryButton;
