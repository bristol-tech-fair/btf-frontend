import React from 'react';
import { FooterWrapper, Image, Text, Icons, Rights } from './Footer.styles';
import { Robot } from '../Illustration';
import { Twitter, Facebook, LinkedIn } from '../Icons';

const Footer = () => {
  return (
    <FooterWrapper>
      <Text>
        <p>About</p>
        <p>Contact</p>
        <p>Code of conduct</p>
        <p>Cookie policy</p>
        <p>Terms & Conditions</p>
        <Icons>
          <Twitter />
          <Facebook />
          <LinkedIn />
        </Icons>
        <Rights>All rights reserved. Bristol Tech Fair 2020 </Rights>
      </Text>
      <Image>
        <Robot />
      </Image>
    </FooterWrapper>
  );
};

export default Footer;
