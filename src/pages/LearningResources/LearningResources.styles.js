import styled from 'styled-components';
// import mediaQuery from '../../../utils/mediaQuery';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const PageTitle = styled.h1`
  margin: var(--small-space) 0;
`;

export const Row = styled.div`
  display: flex;
  padding: 0 var(--large-space);
  width: 100%;
`;

export const ColumnOne = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex: 1;
`;

export const ColumnTwo = styled.div`
  display: flex;
  flex: 2;
  padding-right: var(--small-space);
`;

export const ColumnThree = styled.div`
  display: flex;
  flex: 2;
  padding-right: var(--small-space);
`;

export const ColumnFour = styled.div`
  display: flex;
  flex: 2;
`;

export const FilterTitle = styled.h4`
  color: var(--lightblue);
  padding-right: var(--small-space);
`;

export const SelectContainer = styled.div`
  width: 100%;
`;
