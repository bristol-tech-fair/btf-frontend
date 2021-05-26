import styled from 'styled-components';
import mediaQuery from '../../utils/mediaQuery';

export const HomePageWrapper = styled.div`
  background: ;
  height: 166px;
  border: 1px solid blue;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  position: relative;
  background: #c4c4c4;
  border-radius: 20px;
  margin: 0;
  ${mediaQuery.tablet} {
    height: 295px;
    margin: 20px 20px 0 20px;
  }
  ${mediaQuery.desktop} {
    height: 600px;
    margin: 40px 20px 0 20px;
  }
  & > button {
    position: absolute;
    bottom: 20px;
    border-radius: 20px;
    ${mediaQuery.tablet} {
      bottom: var(--small-space);
      bottom: 50px;
    }
    ${mediaQuery.desktop} {
      bottom: var(--large-space);
      bottom: 70px;
    }
  }
`;

export const TitleWrapper = styled.h2`
  text-align: center;
  padding-top: 32px;
  padding-bottom: 21px;
  color: var(--darkburgundy);
  ${mediaQuery.tablet} {
    padding-top: 36px;
    padding-bottom: 22px;
  }
  ${mediaQuery.desktop} {
    padding-top: 70px;
    padding-bottom: 34px;
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
