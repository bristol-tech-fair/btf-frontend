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

<<<<<<< HEAD
export const Row = styled.div`
=======
export const FilterContainer = styled.div`
  display: block;
  max-width: 100rem;
  border: 2px solid red;
  overflow: hidden;
`;

export const FilterRow = styled.div`
>>>>>>> 41fa4981c1e50edeec62990334c6d4c8750cf31e
  display: flex;
  padding: 0 var(--large-space);
  width: 100%;
<<<<<<< HEAD
`;

export const ColumnOne = styled.div`
=======
  border: 2px solid pink;
  flex-wrap: wrap;
`;

export const FilterColumnOne = styled.div`
>>>>>>> 41fa4981c1e50edeec62990334c6d4c8750cf31e
  display: flex;
  justify-content: flex-end;
  align-items: center;
  justify-content: center;
  flex: 1;
<<<<<<< HEAD
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

=======
  border: 2px solid black;
`;

>>>>>>> 41fa4981c1e50edeec62990334c6d4c8750cf31e
export const FilterTitle = styled.h4`
  color: var(--lightblue);
  padding-right: var(--small-space);
`;

<<<<<<< HEAD
export const SelectContainer = styled.div`
  width: 100%;
`;
=======
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
>>>>>>> 41fa4981c1e50edeec62990334c6d4c8750cf31e
