import styled from 'styled-components';
import mediaQuery from 'utils/mediaQuery';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const PageTitle = styled.h1`
  margin: var(--small-space) 0;
`;

export const FilterContainer = styled.div`
  width: 100%;
`;

export const FilterText = styled.p`
  color: var(--lightblue);
  font-weight: 500;
  padding: var(--smallest-space);
  ${mediaQuery.tablet}, ${mediaQuery.desktop} {
    padding: var(--medium-space) var(--smallest-space);
  }
`;
export const SelectWrapper = styled.div`
  ${mediaQuery.tablet}, ${mediaQuery.desktop} {
    width: 30%;
    margin-right: var(--small-space);
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  flex: 1;
  text-align: center;
  margin: 0 auto;
  ${mediaQuery.tablet} {
    flex-direction: row;
    justify-content: center;
    text-align: left;
  }
  ${mediaQuery.desktop} {
    max-width: 100rem;
  }
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
      gap: var(--medium-space);
      ${mediaQuery.desktop} {
        grid-template-columns: repeat(3, 1fr);
        padding: var(--small-space);
      }
    }
  }
`;
