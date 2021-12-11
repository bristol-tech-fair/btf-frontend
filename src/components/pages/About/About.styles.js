import styled from 'styled-components';
import mediaQuery from 'utils/mediaQuery';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > p {
    padding: var(--small-space);
  }
`;

export const PageTitle = styled.h1`
  margin: var(--small-space) 0;
`;

export const ListContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: var(--small-space) 0 var(--large-space) 0;
  width: 100%;

  //* Style for List component
  & > div {
    padding: var(--smallest-space);
    & > ul {
      gap: var(--smallest-space);
      ${mediaQuery.desktop} {
        grid-template-columns: repeat(3, 1fr);
        padding: var(--small-space);
      }
    }
  }
`;
