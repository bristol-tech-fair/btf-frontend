import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import mediaQuery from '../../utils/mediaQuery';

export const StyledLink = styled(NavLink)`
  color: var(--white);
  font-weight: 400;
`;

export const Image = styled.div`
  position: absolute;
  display: none;
  right: 2.7rem;
  top: calc(-1 * var(--medium-space));
  transform: rotate(12deg);

  svg {
    width: 30.6rem;
    height: 30.1rem;
  }

  ${mediaQuery.tablet} {
    display: flex;
  }
`;

export const Icons = styled.div`
  display: flex;
  max-width: 11.2rem;
  justify-content: space-between;

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

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  height: 23.215rem;
  left: var(--medium-space);
  top: var(--medium-space);

  p {
    font-size: 1.2rem;
    color: var(--white);
  }
`;

export const FooterWrapper = styled.div`
  background-color: var(--orange);
  position: relative;
  height: 31.2rem;
  max-width: 140.7rem;
  display: flex;
  justify-content: space-between;
`;
