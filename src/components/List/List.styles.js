import styled from 'styled-components';
import mediaQuery from '../../utils/mediaQuery';

export const ListWrapper = styled.div`
  padding: var(--small-space);
`;

export const StyledList = styled.ul`
  display: grid;
  gap: var(--medium-space);
  ${mediaQuery.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }
  ${mediaQuery.desktop} {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const ListTitle = styled.h1`
  text-align: center;
  padding-bottom: var(--medium-space);
`;
