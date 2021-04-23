import styled from 'styled-components';
// import mediaQuery from '../../../utils/mediaQuery';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const PageTitle = styled.h1`
  border: 2px solid lime;
  //align-self: center;
  //display: flex;
  //margin: 0 auto;
  //padding-right: var(--small-space);
`;

export const FilterContainer = styled.div`
  //display: flex;
  //justify-content: space-between;
  //padding: var(--small-space);
  width: 100rem;
  border: 2px solid red;
  overflow: hidden;
`;

export const FilterRow = styled.div`
  display: flex;
  width: 100%;
  border: 2px solid pink;
`;

export const FilterColumn = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  width: 25%;
  border: 2px solid black;
`;

export const FilterTitle = styled.h4`
  padding-right: var(--small-space);
  color: var(--lightblue);
`;

export const FilterSelect = styled.div`
  width: 100%;
  //padding-right: var(--small-space);
  //border: 2px solid teal;
`;

export const FilterButtons = styled.div``;
