import styled from 'styled-components';

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: translateY(calc(-1 * var(--medium-space)));
  border: 2px solid green;

  h3 {
    transform: translateY(calc(-1 * var(--medium-space)));
  }
`;

export const ClickCounter = styled.p`
  margin-left: 3px;
`;

export const Info = styled.div`
  padding: var(--medium-space);
  //text-align: center;

  div {
    display: flex;
    justify-content: space-between;
    padding: var(--smallest-space) 0;
  }
`;
