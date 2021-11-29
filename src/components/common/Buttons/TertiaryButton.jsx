import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TertiaryButton = ({ content, type = 'button', onClick }) => {
  return (
    <TertiaryButtonWrapper type={type} onClick={onClick}>
      {content}
    </TertiaryButtonWrapper>
  );
};

TertiaryButton.propTypes = {
  content: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  onClick: PropTypes.func
};

const TertiaryButtonWrapper = styled.button`
  font-weight: 700;
  padding: var(--smallest-space) var(--medium-space);

  border: 0.1rem solid var(--lightblue);
  border-radius: 10rem;

  &:hover {
    color: var(--logopink);
    border-color: var(--logopink);
  }

  &:active,
  &:focus {
    color: var(--logopink);
    box-shadow: 0 0 0 0.2rem var(--logopink);
  }
`;

export default TertiaryButton;
