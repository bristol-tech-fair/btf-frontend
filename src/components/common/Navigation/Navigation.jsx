import React, { useState, useContext } from 'react';
import ModalContext from 'context/ModalContext';
import { PATHS } from 'router/paths';
import {
  NavigationWrapper,
  NavMenu,
  EndLink,
  MenuIcon
} from './Navigation.styles';
import Logo from '../Logo';
import NavLink from '../NavLink';
import { TextButton } from '../Buttons';
import { Menu, Cross } from '../Icons';

const Navigation = () => {
  const [click, setClick] = useState(false);
  const { setModalOn } = useContext(ModalContext);
  return (
    <NavigationWrapper>
      <NavLink path={PATHS.home} content={<Logo color="red" />} />
      <NavMenu click={click} onClick={() => setClick(!click)}>
        <NavLink path={PATHS.learningResources} content="Learning Resources" />
        <NavLink path={PATHS.books} content="Book List" />
        <NavLink path={PATHS.events} content="Events" />
        <NavLink path={PATHS.clubs} content="Clubs" />
        <NavLink path={PATHS.competitions} content="Competitions" />
        <NavLink path={PATHS.supportGroups} content="Support Groups" />
        <NavLink path={PATHS.posts} content="Posts" />
      </NavMenu>
      <EndLink>
        <TextButton
          content="Add a resource"
          type="button"
          onClick={() => setModalOn(true)}
        />
        <MenuIcon>
          <TextButton
            content={click ? <Cross /> : <Menu />}
            type="button"
            onClick={() => setClick(!click)}
          />
        </MenuIcon>
      </EndLink>
    </NavigationWrapper>
  );
};

export default Navigation;
