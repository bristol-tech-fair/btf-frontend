import styled from 'styled-components';
import mediaQuery from '../../utils/mediaQuery';

export const BannerWrapper = styled.div`
  height: 166px;
  border: 0.1rem solid blue;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  position: relative;
  background: #c4c4c4;
  border-radius: var(--small-space);
  margin: 0;
  ${mediaQuery.tablet} {
    height: 295px;
    margin: var(--smallest-space) var(--small-space) 0 var(--small-space);
  }
  ${mediaQuery.desktop} {
    height: 600px;
    margin: var(--medium-space) var(--small-space) 0 var(--small-space);
  }
  & > button {
    position: absolute;
    bottom: var(--small-space);
    border-radius: var(--small-space);
    background: var(--logopink);
    padding: 0 var(--small-space);
    font-size: 1.2rem;
    &:hover {
      background: var(--lightblue);
    }
    ${mediaQuery.tablet} {
      bottom: var(--medium-space);
      padding: var(--smallest-space) var(--medium-space);
    }
    ${mediaQuery.desktop} {
      bottom: var(--large-space);
      padding: var(--small-space) var(--large-space);
    }
  }
`;

export const TitleWrapper = styled.h1`
  text-align: center;
  padding-top: var(--medium-space);
  padding-bottom: var(--small-space);
  color: var(--darkburgundy);
  ${mediaQuery.desktop} {
    padding-top: var(--large-space);
    padding-bottom: var(--medium-space);
  }
`;

export const AboutWrapper = styled.p`
  ${mediaQuery.tablet} {
    width: 90%;
    margin: auto;
  }
  ${mediaQuery.desktop} {
    width: 85%;
    margin: auto;
  }
  & > a {
    color: var(--lightblue);
  }
`;

export const ResourceCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  ${mediaQuery.desktop} {
  }
`;
export const TabletCardWrapper = styled.div`
  display: none;
  & > div {
    width: 100%;
    margin: auto;
  }
  ${mediaQuery.tablet} {
    display: flex;
    justify-content: space-between;
  }
  ${mediaQuery.desktop} {
    display: none;
  }
`;

export const MobileCardWrapper = styled.div`
  display: flex;
  & > div {
    width: 90%;
    margin: auto;
  }
  ${mediaQuery.tablet} {
    display: none;
  }
  ${mediaQuery.desktop} {
    display: none;
  }
`;

export const DeskTopCardWrapper = styled.div`
  display: none;
  ${mediaQuery.tablet} {
    display: none;
  }
  ${mediaQuery.desktop} {
    display: flex;
  }
`;

export const TabletEventCardWrapper = styled(TabletCardWrapper)`
  & > div {
    width: 90%;
    margin: auto;
    padding-bottom: var(--largest-space);
  }
  ${mediaQuery.tablet} {
    justify-content: space-around;
  }
`;

export const EventCardWrapper = styled.div`
  padding-top: var(--small-space);
  width: 95%;
  margin: auto;
  ${mediaQuery.desktop} {
    width: 80%;
    margin: auto;
  }
`;

export const SponsorLogoWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  padding-bottom: var(--largest-space);
  padding-top: var(--small-space);
  ${mediaQuery.desktop} {
    display: flex;
  }
`;

export const SponsorWrapper = styled.div`
  display: none;
  ${mediaQuery.desktop} {
    display: flex;
    flex-direction: column;
  }
`;
