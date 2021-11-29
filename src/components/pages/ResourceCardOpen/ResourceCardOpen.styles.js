import styled from 'styled-components';
import mediaQuery from '../../../utils/mediaQuery';

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: translateY(calc(-1 * var(--small-space)));
  & h1 {
    text-align: center;
  }
  & h3 {
    transform: translateY(calc(-1 * var(--medium-space)));
  }
  ${mediaQuery.tablet} {
    transform: translateY(calc(-1 * var(--small-space)));
  }
`;

export const MobileBanner = styled.div`
  display: flex;
  ${mediaQuery.tablet} {
    display: none;
  }
`;
export const TabletBanner = styled.div`
  display: none;
  ${mediaQuery.tablet} {
    display: flex;
  }
  ${mediaQuery.desktop} {
    display: none;
  }
`;
export const DesktopBanner = styled.div`
  display: none;
  ${mediaQuery.desktop} {
    display: flex;
  }
`;

export const ClickCounter = styled.p`
  margin-left: 3px;
`;

export const Info = styled.div`
  padding: var(--small-space);
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
  ${mediaQuery.tablet} {
    padding: var(--medium-space);
  }
  .info {
    display: flex;
    flex-direction: column;
    ${mediaQuery.tablet} {
      flex-direction: row;
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
  flex-direction: column;
  align-items: center;
  margin-top: var(--medium-space);
  padding: 0 var(--small-space);
  width: 100%;
  ${mediaQuery.tablet} {
    padding: 0 var(--medium-space);
  }
  & svg {
    margin-left: var(--smallest-space);
  }
  .iconLink {
    margin-top: var(--small-space);
  }
  ${mediaQuery.tablet} {
    flex-direction: row;
    justify-content: space-between;
  }
`;
export const Array = styled.div`
  display: flex;
  & p {
    background: hsl(0, 0%, 45%, 0.3);
    border-radius: 5px;
    color: var(--darkblue);
    margin-right: var(--smallest-space);
    padding: 3px;
  }
`;

export const RatingSupport = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: var(--small-space);
  width: 100%;
  & svg {
    margin: 2px;
    :hover {
      scale: 1.3;
    }
  }
  button {
    &:active,
    &:focus {
      border-bottom: none;
    }
  }
  ${mediaQuery.tablet} {
    flex-direction: row;
    justify-content: space-evenly;
  }
`;

export const MailSupport = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${mediaQuery.tablet} {
    flex-direction: row;
    > a {
      margin-top: var(--smallest-space);
    }
  }
`;

export const StarRating = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: var(--small-space);
  ${mediaQuery.tablet} {
    flex-direction: row;
    margin-bottom: 0;
    .buttonHeart {
      margin-top: var(--smallest-space);
    }
  }
  .buttonHeart {
    display: flex;
    justify-content: center;
  }
  & button:focus {
    border: none;
  }
`;

export const NewResource = styled.p`
  margin: var(--small-space) 0;
  ${mediaQuery.tablet} {
    padding: var(--small-space);
    margin-bottom: 0;
  }
`;

export const ButtonsRedirect = styled.div`
  display: flex;
  padding: var(--small-space);
  width: 100%;
  ${mediaQuery.tablet} {
    margin-bottom: var(--medium-space);
    padding: var(--medium-space);
  }
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
