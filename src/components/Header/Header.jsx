import React from 'react';
import { HeaderWrapper } from './Header.styles';
import NavLink from '../NavLink';
import TextButton from '../TextButton';
import Navbar from '../Navbar';

const Header = () => {
  return (
    <HeaderWrapper>
      <div>
        <NavLink path="/" value="Logo" />
      </div>
      <Navbar>
        <NavLink path="/resources" value="Learning Resources" />
        <NavLink path="/books" value="Books List" />
        <NavLink path="/clubs" value="Clubs" />
        <NavLink path="/competetions" value="Competetions" />
        <NavLink path="/events" value="Events" />
        <NavLink path="/posts" value="Posts" />
      </Navbar>
      <TextButton content="Add resources" type="button" />
    </HeaderWrapper>
  );
};

export default Header;
