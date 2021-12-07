import React, { useState, useRef } from 'react';
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
import SubmitResourceForm from '../../pages/LearningResources/SubmitResourceForm/SubmitResourceForm';

const Navigation = () => {
  const [click, setClick] = useState(false);

  //* ----Toggler for popup form
  const refClose = useRef(null);

  const handleClick = () => {
    refClose.current.openPopup();
  };

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
          onClick={handleClick}
        />
        <SubmitResourceForm
          ref={refClose}
          selectAges={[
            { value: '6-12', label: '6-12' },
            { value: '6-18', label: '6-18' },
            { value: '12-18', label: '12-18' }
          ]}
          selectCategory={[
            { value: 'Maths', label: 'Maths' },
            { value: 'Coding', label: 'Coding' },
            { value: 'Electronics', label: 'Electronics' }
          ]}
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
