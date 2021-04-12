import React from 'react';
import {
  FooterWrapper,
  Image,
  LinksList,
  IconsWrapper,
  StyledLink
} from './Footer.styles';
import { Robot } from '../Illustration';
import { Twitter, Facebook, LinkedIn } from '../Icons';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinksList>
        <StyledLink to="/about">About</StyledLink>
        <StyledLink to="/contacts">Contacts</StyledLink>
        <StyledLink to="/codeofconduct">Code of Conduct</StyledLink>
        <StyledLink to="/cookiepolicy">Cookie Policy</StyledLink>
        <StyledLink to="/termsandconditions">Terms & Conditions</StyledLink>
        <IconsWrapper>
          <StyledLink to="/" target="_blank" rel="noopener noreferrer">
            <Twitter />
          </StyledLink>
          <StyledLink to="/" target="_blank" rel="noopener noreferrer">
            <Facebook />
          </StyledLink>
          <StyledLink to="/" target="_blank" rel="noopener noreferrer">
            <LinkedIn />
          </StyledLink>
        </IconsWrapper>
        <p>All rights reserved. Bristol Tech Fair 2020 </p>
      </LinksList>
      <Image>
        <Robot />
      </Image>
    </FooterWrapper>
  );
};

export default Footer;
