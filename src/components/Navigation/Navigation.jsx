import React, { useState } from 'react';
import {
  NavigationWrapper,
  NavMenu,
  EndLink,
  MenuIcon
} from './Navigation.styles';
import Logo from '../Logo';
import NavLink from '../NavLink';
import TextButton from '../TextButton';
import { Menu, Cross } from '../Icons';

const Navigation = () => {
  const [click, setClick] = useState(false);
  return (
    <NavigationWrapper>
      <NavLink path="/" content={<Logo color="red" />} />
      <NavMenu click={click}>
        <NavLink path="/resources" content="Learning Resources" />
        <NavLink path="/books" content="Book List" />
        <NavLink path="/events" content="Events" />
        <NavLink path="/clubs" content="Clubs" />
        <NavLink path="/competitions" content="Competitions" />
        <NavLink path="/supportgroups" content="Support Groups" />
        <NavLink path="/posts" content="Posts" />
      </NavMenu>
      <EndLink>
        <TextButton content="Add a resource" />
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
