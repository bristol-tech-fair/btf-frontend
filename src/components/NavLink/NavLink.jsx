import React from 'react';
import PropTypes from 'prop-types';
import { NavLinkWrapper } from './NavLink.styles';

const NavLink = ({ value }) => {
  return (
    <NavLinkWrapper>
      <p>{value}</p>
    </NavLinkWrapper>
  );
};

NavLink.propTypes = {
  value: PropTypes.string.isRequired
};

export default NavLink;
