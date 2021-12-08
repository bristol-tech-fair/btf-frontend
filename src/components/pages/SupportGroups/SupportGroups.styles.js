import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px solid black;
`;

export const ListContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: var(--small-space) 0 var(--medium-space) 0;
  width: 100%;

  border: 2px solid red;
`;

export const PageTitle = styled.h1`
  margin: var(--small-space) 0;
`;
