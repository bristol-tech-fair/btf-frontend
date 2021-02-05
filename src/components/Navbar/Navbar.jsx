import React from 'react';
import PropTypes from 'prop-types';
import { NavbarWrapper } from './Navbar.styles';

const Navbar = ({ children }) => {
  return <NavbarWrapper>{children}</NavbarWrapper>;
};

Navbar.propTypes = {
  children: PropTypes.node
};

export default Navbar;
