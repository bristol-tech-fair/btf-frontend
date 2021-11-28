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
import { Robot } from '../Illustrations';
import { Twitter, Facebook, LinkedIn } from '../Icons';

const Footer = () => {
  return (
    <FooterWrapper>
      <LeftColumn>
        <LinksWrapper>
          <LeftLinks>
            <StyledLink to="/about">About</StyledLink>
            <StyledLink to="/contact">Contacts</StyledLink>
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
            <StyledLink to="/code-of-conduct">Code of Conduct</StyledLink>
            <StyledLink to="/cookie-policy">Cookie Policy</StyledLink>
            <StyledLink to="/terms-and-conditions">
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
