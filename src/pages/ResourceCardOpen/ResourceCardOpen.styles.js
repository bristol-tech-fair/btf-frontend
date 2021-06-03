import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const PopUp = styled.div`
  display: ${(props) => (props.close === true ? 'flex' : 'none')};
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: translateY(calc(-1 * var(--medium-space)));

  h3 {
    transform: translateY(calc(-1 * var(--medium-space)));
  }
`;

export const ClickCounter = styled.p`
  margin-left: 3px;
`;

export const Info = styled.div`
  padding: var(--medium-space);
  width: 100%;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--smallest-space) 0;

    svg {
      margin-right: 3px;
    }
  }
`;

export const OpenLink = styled(Link)`
  & path {
    stroke: var(--darkgrey);
  }
  :hover {
    path {
      stroke: var(--lightblue);
    }
  }
`;

export const Tags = styled.div`
  display: flex;
  justify-content: space-between;
  padding: var(--medium-space);
  width: 100%;

  & svg {
    margin-left: var(--smallest-space);
  }
`;
export const Array = styled.div`
  display: flex;
  p {
    background: hsl(0, 0%, 45%, 0.3);
    border-radius: 5px;
    color: var(--darkblue);
    margin-right: var(--smallest-space);
    padding: 3px var(--small-space);
  }
`;
