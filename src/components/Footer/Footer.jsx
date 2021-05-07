import React from 'react';
import {
  FooterWrapper,
  ImageContainer,
  LinksContainer,
  ColumnWrapper,
  ColumnOne,
  ColumnTwo,
  Paragraph,
  IconsWrapper,
  StyledLink
} from './Footer.styles';
import { Robot } from '../Illustration';
import { Twitter, Facebook, LinkedIn } from '../Icons';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinksContainer>
        <ColumnWrapper>
          <ColumnOne>
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
          </ColumnOne>
          <ColumnTwo>
            <StyledLink to="/codeofconduct">Code of Conduct</StyledLink>
            <StyledLink to="/cookiepolicy">Cookie Policy</StyledLink>
            <StyledLink to="/termsandconditions">Terms & Conditions</StyledLink>
          </ColumnTwo>
        </ColumnWrapper>

        <Paragraph>All rights reserved. Bristol Tech Fair 2020</Paragraph>
      </LinksContainer>
      <ImageContainer>
        <Robot />
      </ImageContainer>
    </FooterWrapper>
  );
};

export default Footer;
