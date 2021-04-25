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
  display: block;
  max-width: 100rem;
  border: 2px solid red;
  overflow: hidden;
`;

export const FilterRow = styled.div`
  display: flex;
  width: 100%;
  border: 2px solid pink;
  flex-wrap: wrap;
`;

export const FilterColumnOne = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  border: 2px solid black;
`;

export const FilterTitle = styled.h4`
  color: var(--lightblue);
`;

export const FilterColumnTwo = styled.div`
  display: flex;
  align-items: center;
  flex: 3;
  border: 2px solid black;

  & select {
    min-width: 100%;
    border: 2px solid yellow;
  }
`;

export const FilterColumnThree = styled.div`
  display: flex;
  align-items: center;
  flex: 3;
  border: 2px solid black;
`;

export const FilterColumnFour = styled.div`
  display: flex;
  align-items: center;
  flex: 3;
  border: 2px solid black;
`;
