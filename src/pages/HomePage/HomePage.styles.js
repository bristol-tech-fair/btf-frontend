import styled from 'styled-components';
import mediaQuery from '../../utils/mediaQuery';

export const HomePageWrapper = styled.div`
  background: ;
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
    margin: var(--small-space);
    margin-bottom: 0;
  }
  ${mediaQuery.desktop} {
    height: 600px;
    margin: var(--medium-space) var(--small-space) 0 var(--small-space);
  }
  & > button {
    position: absolute;
    bottom: var(--small-space);
    border-radius: var(--small-space);
    ${mediaQuery.tablet} {
      bottom: var(--medium-space);
    }
    ${mediaQuery.desktop} {
      bottom: var(--large-space);
    }
  }
`;

export const TitleWrapper = styled.h2`
  text-align: center;
  padding-top: 32px;
  padding-bottom: var(--small-space);
  color: var(--darkburgundy);
  ${mediaQuery.tablet} {
    padding-top: var(--medium-space);
    padding-bottom: var(--small-space);
  }
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

export const EventCardWrapper = styled.div`
  padding-top: var(--small-space);
  width: 95%;
  margin: auto;
  ${mediaQuery.desktop} {
    width: 80%;
    margin: auto;
  }
`;

export const SponsorWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  padding-bottom: var(--largest-space);
  padding-top: var(--small-space);
`;
