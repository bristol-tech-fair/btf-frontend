import styled from 'styled-components';

export const NavLinkWrapper = styled.div`
  font-size: 1.6rem;
  line-height: 2.08rem;
  text-align: center;
  color: var(--darkburgundy);
  padding: var(--small-space);

  &:hover {
    color: var(--darkpink);
  }

  &:active,
  &:focus {
    color: var(--darkpink);
  }
`;
