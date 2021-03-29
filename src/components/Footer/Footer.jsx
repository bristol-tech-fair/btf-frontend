import React from 'react';
import { FooterWrapper, Image, Text, Icons, StyledLink } from './Footer.styles';
import { Robot } from '../Illustration';
import { Twitter, Facebook, LinkedIn } from '../Icons';

const Footer = () => {
  return (
    <FooterWrapper>
      <Text>
        <StyledLink to="/about">About</StyledLink>
        <StyledLink to="/contacts">Contacts</StyledLink>
        <StyledLink to="/codeofconduct">Code of Conduct</StyledLink>
        <StyledLink to="/cookiepolicy">Cookie Policy</StyledLink>
        <StyledLink to="/termsandconditions">Terms & Conditions</StyledLink>
        <Icons>
          <StyledLink to="/">
            <Twitter />
          </StyledLink>
          <StyledLink to="/">
            <Facebook />
          </StyledLink>
          <StyledLink to="/">
            <LinkedIn />
          </StyledLink>
        </Icons>
        <p>All rights reserved. Bristol Tech Fair 2020 </p>
      </Text>
      <Image>
        <Robot />
      </Image>
    </FooterWrapper>
  );
};

export default Footer;
