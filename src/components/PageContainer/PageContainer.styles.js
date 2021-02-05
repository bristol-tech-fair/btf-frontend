import styled from 'styled-components';

export const PageContainerWrapper = styled.div`
  padding: var(--small-space);
  height: 67vh;
  display: flex;
  flex-direction: ${(props) =>
    props.direction === 'column' ? 'column' : 'row'};
  padding: 1rem;
  justify-content: ${(props) =>
    props.direction === 'column' ? 'start' : 'center'};
  align-items: ${(props) =>
    props.direction === 'column' ? 'center' : 'start'};
`;
