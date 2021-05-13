import styled from 'styled-components';
import InputWrapper from '../../theme/inputs.styles';

export const SelectInputWrapper = styled(InputWrapper)`
  display: flex;
  flex-direction: column;

  select {
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;

    font-size: 1.6rem;
  }

  &::after {
    content: ' ';
    display: block;
    position: absolute;
    top: 5.6rem;
    right: var(--small-space);
    width: 0;
    height: 0;
    border-left: 0.8rem solid transparent;
    border-right: 0.8rem solid transparent;
    border-top: 1.2rem solid var(--lightblue);
  }
`;
