import styled from 'styled-components';
import { Link } from 'react-router-dom';
import mediaQuery from '../../utils/mediaQuery';

export const FrontCard = styled.div`
  display: flex;
  flex-direction: column;
  background: var(--white);
  padding: var(--small-space);
  height: 100vh;

  ${mediaQuery.tablet} {
    box-shadow: 0px 0px 60px hsla(0, 0%, 0%, 0.5);
    border-radius: 15px;
    height: auto;
    height: 90rem;
    width: 60rem;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-between;

  & select {
    border: 1px solid var(--lightblue);
  }
`;

export const MobileNav = styled.div`
  ${mediaQuery.tablet} {
    display: none;
  }
`;

export const CloseButton = styled(Link)`
  display: none;
  align-self: flex-end;
  margin: var(--small-space) var(--small-space) 0 0;

  ${mediaQuery.tablet} {
    display: flex;
  }
`;

export const Header = styled.h3`
  padding: var(--small-space) 0;
`;

export const Attachments = styled.p`
  text-align: center;
`;

export const UploadsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const FileToUpload = styled(Link)`
  display: flex;
  align-items: center;
`;

export const ButtonContainer = styled.div`
  margin: 0 auto;
`;

export const Info = styled.p`
  color: var(--darkgrey);
  text-align: center;
`;

export const BackCard = styled.div`
  display: flex;
  flex-direction: column;
  background: var(--white);
  padding: var(--small-space);

  & ${Header} {
    color: var(--lightblue);
    text-align: center;

    ${mediaQuery.tablet} {
      padding: var(--large-space) var(--largest-space);
    }
  }

  ${mediaQuery.tablet} {
    box-shadow: 0px 0px 60px hsla(0, 0%, 0%, 0.5);
    border-radius: 15px;
    justify-content: space-between;
    height: 90rem;
    width: 60rem;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  margin: 0 auto;

  ${mediaQuery.tablet} {
    & svg {
      height: auto;
      width: 50rem;
    }
  }
`;

export const ReturnButton = styled(Link)`
  display: flex;
  align-items: center;
  color: var(--lightblue);
  padding: var(--small-space) var(--small-space);

  ${mediaQuery.tablet} {
    display: none;
  }
`;

export const FooterContainer = styled.div`
  ${mediaQuery.tablet} {
    display: none;
  }
`;

export const PopupContainer = styled.div`
  display: flex;
  flex-direction: column;
  //justify-content: center;
  //align-items: center;
  height: 100vh;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: hsla(0, 0%, 0%, 0.8);
  //z-index: 9999;
  //opacity: 0;
  //visibility: hidden;
  //transition: all 0.3s;

  //Open states
  &:target {
    opacity: 1;
    visibility: visible;
  }

  &:target & ${Form} {
    //opacity: 1;
    //transform: translate(-50%, -50%) scale(1);
  }

  & ${CloseButton} {
    &:link,
    &:visited {
      //color: $color-grey-dark;
      //position: absolute;
      //top: 2.5rem;
      //right: 2.5rem;
      //font-size: 3rem;
      //text-decoration: none;
      //display: inline-block;
      //transition: all 0.2s;
      //line-height: 1;
    }
  }
  ${mediaQuery.tablet} {
    justify-content: center;
    align-items: center;
  }
`;
