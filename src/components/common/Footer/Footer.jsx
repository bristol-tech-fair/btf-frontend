import React from 'react';
import { PATHS } from 'router/paths';
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
import { Robot } from '../Illustrations';
import { Twitter, Facebook, LinkedIn } from '../Icons';

const Footer = () => {
  return (
    <FooterWrapper>
      <LeftColumn>
        <LinksWrapper>
          <LeftLinks>
            <StyledLink to={PATHS.about}>About</StyledLink>
            <StyledLink to={PATHS.contact}>Contact</StyledLink>
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
            <StyledLink to={PATHS.codeOfConduct}>Code of Conduct</StyledLink>
            <StyledLink to={PATHS.cookiePolicy}>Cookie Policy</StyledLink>
            <StyledLink to={PATHS.termsAndConditions}>
              Terms & Conditions
            </StyledLink>
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
