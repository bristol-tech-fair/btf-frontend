import React from 'react';
import PropTypes from 'prop-types';
import { NavLinkWrapper } from './NavLink.styles';

const NavLink = ({ content, path }) => {
  return <NavLinkWrapper to={path}>{content}</NavLinkWrapper>;
};

NavLink.propTypes = {
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  path: PropTypes.string.isRequired
};

export default NavLink;
