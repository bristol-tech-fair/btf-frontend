import styled from 'styled-components';
import mediaQuery from '../../../utils/mediaQuery';

export const LayoutContainer = styled.div`
  background: var(--white);
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  align-items: center;

  // for testing
  border: 2px solid red;
`;

export const FooterPlaceholder = styled.div`
  background-color: var(--orange);
  width: 100%;
  margin-top: auto;

  & > div {
    max-width: 144rem;
    margin: 0 auto;
  }
  // for testing
  border: 2px solid #298000;
`;

export const NavPlaceholder = styled.div`
  width: 100%;

  // for testing
  border: 2px solid purple;

  ${mediaQuery.desktop} {
    max-width: 144rem;
  }
`;

export const Main = styled.main`
  max-width: 144rem;
  margin: var(--medium-space) 0;
  overflow: hidden;
  padding: 0 var(--small-space);

  // for testing
  box-shadow: 4px 5px 8px 0px rgba(0, 0, 0, 0.75);
`;
