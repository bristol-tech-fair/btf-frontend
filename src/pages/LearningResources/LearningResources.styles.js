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

export const FilterContainer = styled.div`
  width: 100%;
`;

export const ListContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: var(--small-space) 0 var(--medium-space) 0;
  width: 100%;
`;
