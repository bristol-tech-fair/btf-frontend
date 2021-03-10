import React from 'react';
import { NavigationWrapper } from './Navigation.styles';

import Logo from '../Logo';
import NavLink from '../NavLink';
import TextButton from '../TextButton';

const Navigation = () => {
  return (
    <NavigationWrapper>
      <Logo color="red" />
      <NavLink content="Learning Resources" />
      <NavLink content="Book List" />
      <NavLink content="Events" />
      <NavLink content="Clubs" />
      <NavLink content="Competitions" />
      <NavLink content="Support Groups" />
      <NavLink content="Posts" />
      <TextButton content="Add a resource" />
    </NavigationWrapper>
  );
};

export default Navigation;
