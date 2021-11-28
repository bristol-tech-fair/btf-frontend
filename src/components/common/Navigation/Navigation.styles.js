import styled from 'styled-components';
import mediaQuery from '../../../utils/mediaQuery';

export const NavigationWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--smallest-space), var(--small-space);
  background: var(--white);

  ${mediaQuery.tablet} {
    padding: var(--small-space);
  }
`;

export const NavMenu = styled.div`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  background: var(--white);
  padding-top: var(--smallest-space);
  display: ${(props) => (props.click === true ? 'flex' : 'none')};

  ${mediaQuery.tablet} {
    padding-top: 35px;
  }

  ${mediaQuery.desktop} {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    position: static;
    width: auto;
    padding-top: 0;
  }
`;

export const EndLink = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin: 0 var(--smallest-space);
`;

export const MenuIcon = styled.div`
  z-index: 99;
  margin-left: var(--small-space);

  ${mediaQuery.desktop} {
    display: none;
  }
`;
