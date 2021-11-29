import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

export const NavLinkWrapper = styled(Link)`
  text-decoration: none;
  padding: 0.5rem 1rem;
  cursor: pointer;

  &.active {
    color: var(--logopink);
  }

  &:hover {
    color: var(--lightblue);
  }
`;
