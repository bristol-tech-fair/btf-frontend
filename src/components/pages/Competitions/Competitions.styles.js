import styled from 'styled-components';
// import mediaQuery from 'utils/mediaQuery';

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
  margin-bottom: var(--large-space);
  width: 100%;

  //* Style for List component
  & > div {
    padding: var(--smallest-space);
    & > ul {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;
