import React from 'react';
import { Route, Switch } from 'react-router-dom';
import About from '../components/About';
import BookList from '../components/BookList';
import Clubs from '../components/Clubs';
import CodeOfConduct from '../components/CodeOfConduct';
import Competitions from '../components/Competitions';
import Contact from '../components/Contact';
import CookiePolicy from '../components/CookiePolicy';
import Events from '../components/Events';
import HomePage from '../components/HomePage';
import Posts from '../components/Posts';
import PostsOpen from '../components/PostsOpen';
import SupportGroups from '../components/SupportGroups';
import TermsAndConditions from '../components/Terms';
import LearningResources from '../components/LearningResources';

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
