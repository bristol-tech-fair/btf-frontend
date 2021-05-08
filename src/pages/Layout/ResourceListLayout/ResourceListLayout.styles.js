import styled from 'styled-components';
import mediaQuery from '../../../utils/mediaQuery';

export const LayoutContainer = styled.div`
  background: var(--white);
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-width: 144rem;
  margin: auto;
  overflow: hidden;
`;

export const MainContainer = styled.main`
  margin: var(--medium-space) 0;
  padding: 0 5px;

  ${mediaQuery.tablet} {
    padding: 0 var(--small-space);
  }
`;
