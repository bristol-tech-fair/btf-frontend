import styled from 'styled-components';
import mediaQuery from '../../../utils/mediaQuery';

export const LayoutContainer = styled.div`
  //background: var(--white);

  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;

  overflow: hidden;
`;

export const HeaderContainer = styled.header`
  width: 100%;

  ${mediaQuery.desktop} {
    max-width: 144rem;
  }
`;

export const MainContainer = styled.main`
  width: 100%;
  max-width: 144rem;
  margin: var(--medium-space) 0;
`;

export const FooterContainer = styled.div`
  width: 100%;
  max-width: 144rem;
  margin-top: auto;
`;
