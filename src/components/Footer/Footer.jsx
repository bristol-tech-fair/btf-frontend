import React from 'react';
import { FooterWrapper } from './Footer.styles';
import NavLink from '../NavLink';

const Footer = () => {
  return (
    <FooterWrapper>
      <div className="footerdiv">
        <NavLink path="/about" value="About" />
        <NavLink path="/contact" value="Contact" />
      </div>
      <div className="footerdiv">
        <NavLink path="/codeofconduct" value="Code Of Conduct" />
        <NavLink path="/policy" value="Cookie Policy" />
        <NavLink path="/terms" value="Terms and Conditions" />
      </div>
      <h1>Robot</h1>
    </FooterWrapper>
  );
};

export default Footer;
