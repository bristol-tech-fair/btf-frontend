import React from 'react';
import {
  FooterWrapper,
  RightColumn,
  LeftColumn,
  LinksWrapper,
  LeftLinks,
  RightLinks,
  Paragraph,
  IconsWrapper,
  StyledLink
} from './Footer.styles';
import { Robot } from '../Illustration';
import { Twitter, Facebook, LinkedIn } from '../Icons';

const Footer = () => {
  return (
    <FooterWrapper>
      <LeftColumn>
        <LinksWrapper>
          <LeftLinks>
            <StyledLink to="/about">About</StyledLink>
            <StyledLink to="/contacts">Contacts</StyledLink>
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
          </LeftLinks>
          <RightLinks>
            <StyledLink to="/codeofconduct">Code of Conduct</StyledLink>
            <StyledLink to="/cookiepolicy">Cookie Policy</StyledLink>
            <StyledLink to="/termsandconditions">Terms & Conditions</StyledLink>
          </RightLinks>
        </LinksWrapper>

        <Paragraph>All rights reserved. Bristol Tech Fair 2020</Paragraph>
      </LeftColumn>
      <RightColumn>
        <Robot />
      </RightColumn>
    </FooterWrapper>
  );
};

export default Footer;
