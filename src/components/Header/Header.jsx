import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HeaderWrapper } from './Header.styles';
import NavLink from '../NavLink';
import TextButton from '../TextButton';
import Navbar from '../Navbar';

const Header = () => {
  const location = useLocation();
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
      <Link
        to={{
          pathname: '/addresources',
          state: { background: location }
        }}
      >
        <TextButton content="Add resources" type="button" />
      </Link>
    </HeaderWrapper>
  );
};

export default Header;
