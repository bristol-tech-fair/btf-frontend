import styled from 'styled-components';
import mediaQuery from '../../../utils/mediaQuery';

export const LayoutContainer = styled.h2`
  color: green;
`;

export const TestComp = styled.div`
  width: 100%;
  padding: var(--smallest-space) 0;

  ${mediaQuery.tablet} {
    flex: 1;
    min-width: 29.9rem;
    max-width: 30rem;
  }
`;

export const FlexList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;
