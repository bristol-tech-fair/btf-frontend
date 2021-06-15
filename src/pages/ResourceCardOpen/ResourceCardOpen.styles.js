import styled from 'styled-components';

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: translateY(calc(-1 * var(--medium-space)));

  & h3 {
    transform: translateY(calc(-1 * var(--medium-space)));
  }
`;

export const ClickCounter = styled.p`
  margin-left: 3px;
`;

export const Info = styled.div`
  padding: var(--medium-space);
  width: 100%;

  & div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--smallest-space) 0;

    svg {
      margin-right: 3px;
    }
  }
`;

export const OpenLink = styled.a`
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
  & p {
    background: hsl(0, 0%, 45%, 0.3);
    border-radius: 5px;
    color: var(--darkblue);
    margin-right: var(--smallest-space);
    padding: 3px var(--small-space);
  }
`;

export const RatingSupport = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: var(--medium-space);
  width: 100%;
  & svg {
    margin: 2px;
    :hover {
      scale: 1.3;
    }
  }
`;

export const MailSupport = styled.div`
  display: flex;
  align-items: center;
`;

export const StarRating = styled.div`
  display: flex;
  & button:focus {
    border: none;
  }
`;

export const NewResource = styled.p`
  padding: var(--small-space);
`;
export const ButtonsRedirect = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: var(--small-space);
  padding: var(--medium-space);
  width: 100%;

  & a.active {
    color: var(--lightblue);
    :hover {
      color: var(--logopink);
    }
  }

  & div {
    display: flex;
    align-items: center;
  }

  & svg {
    scale: 1.3;
  }
`;
