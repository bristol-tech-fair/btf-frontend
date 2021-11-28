import React from 'react';
import { Route, Switch } from 'react-router-dom';
import About from 'components/pages/About';
import BookList from 'components/pages/BookList';
import Clubs from 'components/pages/Clubs';
import CodeOfConduct from 'components/pages/CodeOfConduct';
import Competitions from 'components/pages/Competitions';
import Contact from 'components/pages/Contact';
import CookiePolicy from 'components/pages/CookiePolicy';
import Events from 'components/pages/Events';
import HomePage from 'components/pages/HomePage';
import Posts from 'components/pages/Posts';
import PostsOpen from 'components/pages/PostsOpen';
import SupportGroups from 'components/pages/SupportGroups';
import TermsAndConditions from 'components/pages/Terms';
import LearningResources from 'components/pages/LearningResources';

// TODO Modify Routes as we progress with development

// import ResourceCardOpen from '../pages/ResourceCardOpen';

function Routes() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <HomePage readMoreUrl="/" />
        </Route>
        <Route path="/learning-resources">
          <LearningResources />
        </Route>
        {/*
        <Route  path="/resource/:id">
          <ResourceCardOpen />
        </Route> */}
        <Route path="/about">
          <About />
        </Route>
        <Route path="/cookie-policy">
          <CookiePolicy />
        </Route>
        <Route path="/terms-and-conditions">
          <TermsAndConditions />
        </Route>
        <Route path="/books">
          <BookList />
        </Route>
        <Route path="/clubs">
          <Clubs />
        </Route>
        <Route path="/support-groups">
          <SupportGroups />
        </Route>
        <Route path="/competitions">
          <Competitions />
        </Route>
        <Route path="/code-of-conduct">
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

export default Routes;
