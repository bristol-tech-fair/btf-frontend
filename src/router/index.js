import React from 'react';
import { Route, Switch } from 'react-router-dom';
import About from '../pages/About';
import BookList from '../pages/BookList';
import Clubs from '../pages/Clubs';
import CodeOfConduct from '../pages/CodeOfConduct';
import Competitions from '../pages/Competitions';
import Contact from '../pages/Contact';
import CookiePolicy from '../pages/CookiePolicy';
import Events from '../pages/Events';
import HomePage from '../pages/HomePage';
import Posts from '../pages/Posts';
import PostsOpen from '../pages/PostsOpen';
import SupportGroups from '../pages/SupportGroups';
import TermsAndConditions from '../pages/TandC';

function Router() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <HomePage readMoreUrl="/" />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/cookiepolicy">
          <CookiePolicy />
        </Route>
        <Route path="/termsandconditions">
          <TermsAndConditions />
        </Route>
        <Route path="/books">
          <BookList />
        </Route>
        <Route path="/clubs">
          <Clubs />
        </Route>
        <Route path="/supportgroups">
          <SupportGroups />
        </Route>
        <Route path="/competitions">
          <Competitions />
        </Route>
        <Route path="/codeofconduct">
          <CodeOfConduct />
        </Route>
        <Route path="/events">
          <Events />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/posts">
          <Posts />
        </Route>
        <Route path="/posts/:title">
          <PostsOpen />
        </Route>
      </Switch>
    </>
  );
}

export default Router;
