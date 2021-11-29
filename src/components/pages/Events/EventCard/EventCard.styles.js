import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import mediaQuery from 'utils/mediaQuery';

export const EventCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--small-space);
  img {
    border-radius: 1rem;
  }
  h4 {
    color: var(--lightpink);
  }
  h3 {
    color: var(--darkburgundy);
  }
  .details {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--small-space);
  }
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--smallest-space);
  }
  .vectors {
    display: flex;
    gap: var(--small-space);
  }

  ${mediaQuery.tablet} {
    flex-direction: row;
    .details {
      align-items: start;
    }
    .content {
      align-items: start;
    }
    .vectors {
      flex-direction: column;
    }
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  color: var(--lightblue);

  &.active {
    color: var(--logopink);
  }

  &:hover {
    color: var(--lightblue);
  }
`;
