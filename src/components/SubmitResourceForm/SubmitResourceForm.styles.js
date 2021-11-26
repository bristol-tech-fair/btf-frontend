import styled from 'styled-components';
import mediaQuery from '../../utils/mediaQuery';

export const PopupContainer = styled.div`
  display: ${(props) => (props.close === true ? 'flex ' : 'none')};
  flex-direction: column;
  background-color: hsla(0, 0%, 0%, 0.8);
  height: 100vh;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;

  z-index: 9999;

  #err-msg {
    color: red;
  }

  ${mediaQuery.tablet} {
    justify-content: center;
    align-items: center;
  }
`;

export const FrontCard = styled.div`
  display: flex;
  flex-direction: column;
  background: var(--white);
  padding: var(--smallest-space);
  width: 100%;

  ${mediaQuery.tablet} {
    box-shadow: 0px 0px 60px hsla(0, 0%, 0%, 0.5);
    border-radius: 15px;
    padding: var(--small-space);
    min-height: 75rem;
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

export const CloseButton = styled.div`
  display: none;
  align-self: flex-end;

  ${mediaQuery.tablet} {
    display: flex;
  }
`;

export const Header = styled.h3`
  padding: var(--small-space) 0;
  text-align: center;

  ${mediaQuery.tablet} {
    text-align: left;
  }
`;

export const Attachments = styled.p`
  text-align: center;
  margin-top: var(--smallest-space);
`;

export const UploadsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-self: center;
  margin: var(--smallest-space) 0;

  [type='file'] {
    border: 0;
    clip: rect(0, 0, 0, 0);
    height: 1px;
    overflow: hidden;
    padding: 0;
    position: absolute !important;
    white-space: nowrap;
    width: 1px;
  }
`;

export const FileToUpload = styled.div`
  display: flex;
  align-items: center;
  padding: 0 var(--smallest-space);

  label {
    cursor: pointer;
    font-weight: bold;

    &:hover {
      color: var(--logopink);
    }
  }
`;

export const ButtonContainer = styled.div`
  margin: 0 auto;
`;

export const Info = styled.p`
  color: var(--darkgrey);
  margin: var(--small-space) 0;
  text-align: center;
`;

export const BackCard = styled.div`
  display: flex;
  flex-direction: column;
  background: var(--white);
  height: 100vh;
  width: 100%;

  ${mediaQuery.tablet} {
    padding: var(--small-space);
  }

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
    height: 75rem;
    width: 60rem;
  }
`;

export const ImageContainer = styled.div`
  margin: auto auto;

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
  margin-top: auto;
  ${mediaQuery.tablet} {
    display: none;
  }
`;
