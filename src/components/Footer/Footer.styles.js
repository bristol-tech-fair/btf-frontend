import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import mediaQuery from '../../utils/mediaQuery';

export const StyledLink = styled(NavLink)`
  color: var(--white);
  font-weight: 400;
  align-self: flex-start;
`;

export const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  background-color: var(--orange);
  position: relative;

  height: var(--largest-space);
  padding: var(--small-space);
`;

export const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const Paragraph = styled.p`
  display: flex;
  align-self: center;
  color: var(--white);

  ${mediaQuery.tablet} {
    align-self: flex-start;
  }
`;

export const LinksWrapper = styled.div`
  display: flex;
  flex: 3;
`;

export const LeftLinks = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;

  p {
    font-size: 1.2rem;
    color: var(--white);
  }
`;
export const RightLinks = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const IconsWrapper = styled.div`
  display: flex;
  max-width: 13rem;
  justify-content: space-between;
  padding: var(--smallest-space) 0;

  ${StyledLink} svg {
    vertical-align: middle;
    path {
      stroke: white;
    }

    &:hover path {
      stroke: var(--lightblue);
    }
  }
`;

export const RightColumn = styled.div`
  display: none;
  transform: rotate(12deg) translateY(calc(-1 * var(--largest-space)));

  ${mediaQuery.tablet} {
    display: flex;

    svg {
      width: 30.6rem;
      height: 30.1rem;
    }
  }
`;
