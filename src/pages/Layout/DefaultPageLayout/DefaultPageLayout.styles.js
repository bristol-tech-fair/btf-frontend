import styled from 'styled-components';
import mediaQuery from '../../../utils/mediaQuery';

export const LayoutContainer = styled.div`
  background: var(--white);

  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;

  overflow: hidden;
`;

export const HeaderContainer = styled.div`
  width: 100%;

  ${mediaQuery.desktop} {
    max-width: 144rem;
  }
`;

export const MainContainer = styled.main`
  max-width: 144rem;
  margin: var(--medium-space) 0;
  padding: 0 5px;

  ${mediaQuery.tablet} {
    padding: 0 var(--small-space);
  }
`;

export const FooterContainer = styled.div`
  background-color: var(--orange);
  width: 100%;
  margin-top: auto;

  & > div {
    max-width: 144rem;
    margin: 0 auto;
  }
`;
