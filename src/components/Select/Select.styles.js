import styled from 'styled-components';
// import InputWrapper from '../../theme/inputs.styles';

// export const SelectWrapper = styled(InputWrapper)`
export const SelectWrapper = styled.div`
  display: flex;
  flex-flow: column;
  position: relative;

  select {
    font-size: 1.6rem;
    cursor: pointer;
    color: var(--darkgrey);
    -moz-appearance: none;
    -webkit-appearance: none;
  }

  &::after {
    content: ' ';
    display: block;
    position: absolute;
    top: 5.2rem;
    right: var(--medium-space);
    width: 0;
    height: 0;
    border-left: 0.8rem solid transparent;
    border-right: 0.8rem solid transparent;
    border-top: 1.2rem solid var(--lightblue);
  }
`;
