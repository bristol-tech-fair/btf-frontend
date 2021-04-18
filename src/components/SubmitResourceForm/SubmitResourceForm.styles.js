import styled from 'styled-components';
import { Link } from 'react-router-dom';
// import mediaQuery from '../../utils/mediaQuery';

export const FrontCard = styled.div`
  display: flex;
  flex-direction: column;
  background: var(--white);
  box-shadow: 0px 0px 60px hsla(0, 0%, 0%, 0.5);
  border-radius: 15px;
  width: 36rem;
  height: 50rem;
  //padding: var(--medium-space);
`;

export const CloseButton = styled(Link)`
  display: flex;
  align-self: flex-end;
  margin: var(--small-space) var(--small-space) 0 0;
  border: 2px solid lime;
`;

export const Header = styled.h3`
  padding: var(--small-space) var(--medium-space);
`;

export const Attachments = styled.p``;

export const BackCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--white);
  box-shadow: 0px 0px 60px hsla(0, 0%, 0%, 0.5);
  border-radius: 15px;
  width: 36rem;

  & ${Header} {
    color: var(--lightblue);
    text-align: center;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: var(--medium-space);
  border: 2px solid red;
  //background-color: $color-white;
  //box-shadow: 0 2rem 4rem rgba($color-black, 0.2);
  //border-radius: 3px;
  //display: table;
  //overflow: hidden;
  //opacity: 0;
  //transform: translate(-50%, -50%) scale(0.25);
  //transition: all 0.5s 0.2s;
`;

export const PopupContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
`;
