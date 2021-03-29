import React from 'react';
import { FooterWrapper, Image, Text, Icons } from './Footer.styles';
import { Robot } from '../Illustration';
import { Twitter, Facebook, LinkedIn } from '../Icons';

const Footer = () => {
  return (
    <FooterWrapper>
      <a href="/">About is testing link</a>
      <Text>
        <a href="/">About</a>
        <a href="/">Contacts</a>
        <a href="/">Code of conduct</a>
        <a href="/">Cookie policy</a>
        <a href="/">Terms & Conditions</a>
        <Icons>
          <a href="/">
            <Twitter />
          </a>
          <a href="/">
            <Facebook />
          </a>
          <a href="/">
            <LinkedIn />
          </a>
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
