import React, { useContext } from 'react';
import { HeaderWrapper } from './Header.styles';
import NavLink from '../NavLink';
import TextButton from '../TextButton';
import Navbar from '../Navbar';
import ModalContext from '../../context/ModalContext';
import Logo from '../Logo';

const Header = () => {
  const { setModalOn } = useContext(ModalContext);
  return (
    <HeaderWrapper>
      <NavLink path="/" value={<Logo />} />
      <Navbar>
        <NavLink path="/resources" value="Learning Resources" />
        <NavLink path="/books" value="Books List" />
        <NavLink path="/clubs" value="Clubs" />
        <NavLink path="/competetions" value="Competetions" />
        <NavLink path="/events" value="Events" />
        <NavLink path="/posts" value="Posts" />
      </Navbar>
      <TextButton
        content="Add resources"
        type="button"
        onClick={() => setModalOn(true)}
      />
    </HeaderWrapper>
  );
};

export default Header;
