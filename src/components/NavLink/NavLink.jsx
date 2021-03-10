import React from 'react';
import PropTypes from 'prop-types';
import { NavLinkWrapper } from './NavLink.styles';

const NavLink = ({ value, path }) => {
  return <NavLinkWrapper to={path}>{value}</NavLinkWrapper>;
};

NavLink.propTypes = {
  value: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired
};

export default NavLink;
