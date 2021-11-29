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
import LearningResources from 'components/pages/LearningResources';
import Posts from 'components/pages/Posts';
import PostsOpen from 'components/pages/PostsOpen';
import ResourceCardOpen from 'components/pages/ResourceCardOpen';
import SupportGroups from 'components/pages/SupportGroups';
import TermsAndConditions from 'components/pages/Terms';

function Routes() {
  return (
    <>
      <Switch>
        {/* Header / Navigation */}
        <Route path="/">
          <HomePage readMoreUrl="/" />
        </Route>
        <Route exact path="/learning-resources">
          <LearningResources />
        </Route>
        <Route exact path="/books">
          <BookList />
        </Route>
        <Route exact path="/events">
          <Events />
        </Route>
        <Route exact path="/clubs">
          <Clubs />
        </Route>
        <Route exact path="/competitions">
          <Competitions />
        </Route>
        <Route exact path="/support-groups">
          <SupportGroups />
        </Route>
        <Route exact path="/posts">
          <Posts />
        </Route>
        {/* Pages by id / title */}
        <Route exact path="/resource/:id">
          <ResourceCardOpen />
        </Route>
        <Route exact path="/posts/:title">
          <PostsOpen />
        </Route>
        {/* Footer links */}
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/code-of-conduct">
          <CodeOfConduct />
        </Route>
        <Route exact path="/cookie-policy">
          <CookiePolicy />
        </Route>
        <Route exact path="/terms-and-conditions">
          <TermsAndConditions />
        </Route>
      </Switch>
    </>
  );
}

export default Routes;
