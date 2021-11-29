import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TextButton = ({ content, type = 'button', onClick }) => {
  return (
    <TextButtonWrapper type={type} onClick={onClick}>
      {content}
    </TextButtonWrapper>
  );
};

TextButton.propTypes = {
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  onClick: PropTypes.func
};

const TextButtonWrapper = styled.button`
  font-weight: 700;
  &:active,
  &:focus {
    color: var(--logopink);
    border-bottom: 0.2rem var(--logopink) solid;
  }
`;

export default TextButton;
