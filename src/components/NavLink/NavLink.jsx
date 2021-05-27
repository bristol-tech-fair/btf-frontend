import React from 'react';
import PropTypes from 'prop-types';
import { NavLinkWrapper } from './NavLink.styles';

const NavLink = ({ content, path }) => {
  return <NavLinkWrapper to={path}>{content}</NavLinkWrapper>;
};

NavLink.propTypes = {
<<<<<<< HEAD
  content: PropTypes.node.isRequired,
=======
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
>>>>>>> origin/develop
  path: PropTypes.string.isRequired
};

export default NavLink;
