import styled from 'styled-components';
import { Link } from 'react-router-dom';
import mediaQuery from '../../utils/mediaQuery';

export const PopupContainer = styled.div`
  //swap none with flex
  display: ${(props) => (props.click === true ? 'none' : 'flex')};
  flex-direction: column;
  height: 100vh;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: hsla(0, 0%, 0%, 0.8);
  z-index: 9999;

  ${mediaQuery.tablet} {
    justify-content: center;
    align-items: center;
  }
`;

export const FrontCard = styled.div`
  display: flex;
  flex-direction: column;
  background: var(--white);
  padding: var(--small-space);
  height: 100vh;
  width: 100%;

  ${mediaQuery.tablet} {
    box-shadow: 0px 0px 60px hsla(0, 0%, 0%, 0.5);
    border-radius: 15px;
    height: 74rem;
    width: 60rem;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-between;
`;

export const MobileNav = styled.div`
  ${mediaQuery.tablet} {
    display: none;
  }
`;

export const CloseButton = styled(Link)`
  display: flex;
  align-self: flex-end;
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
  align-self: center;
`;

export const FileToUpload = styled(Link)`
  display: flex;
  align-items: center;
  padding: 0 var(--smallest-space);
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
    padding: 0 var(--small-space);
    text-align: center;

    ${mediaQuery.tablet} {
      padding: var(--large-space) var(--largest-space);
    }

    ${PopupContainer} {
      display: flex;
    }
  }

  ${mediaQuery.tablet} {
    box-shadow: 0px 0px 60px hsla(0, 0%, 0%, 0.5);
    border-radius: 15px;
    justify-content: space-between;
    height: 74rem;
    width: 60rem;
  }
`;

export const ImageContainer = styled.div`
  margin: 0 auto;

  ${mediaQuery.tablet} {
    & svg {
      height: auto;
      width: 40rem;
    }
  }
`;

export const ReturnButton = styled.div`
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
