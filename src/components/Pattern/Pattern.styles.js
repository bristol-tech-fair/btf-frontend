import styled from 'styled-components';

export const PatternWrapper = styled.div`
  .pattern-bg {
    fill: ${({ color }) => `var(--${color})`};
  }
`;
